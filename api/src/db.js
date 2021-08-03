import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


(async () => {
    try {
        const db = await mongoose.connect(
            `mongodb://${process.env.MONGO_HOST}:27017/${process.env.MONGO_DATABASE}`,
            { newUrlParser: true }
        );
        console.log('database is connected to', db.connection.name);
    } catch (error) {
        console.log(error)
    }
})