import { Schema, model } from 'mongoose';


const LinkSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        url: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            data: Buffer,
            contentType: String
        },
        isFavorite: {
            type: Boolean,
            default: false,
        }
    },
    { versionKey: false, timestamps: true }
);

export default model('Links', LinkSchema);