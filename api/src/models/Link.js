import { Schema, model } from 'mongoose';


const LinkSchema = new Schema(
    {

    },
    { versionKey: false, timestamps: true }
);

export default model('Links', LinkSchema);