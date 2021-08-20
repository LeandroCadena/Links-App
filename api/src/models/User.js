import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { versionKey: false, timestamps: true }
)

UserSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isNew || !user.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

UserSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
};

export default mongoose.model('Users', UserSchema);