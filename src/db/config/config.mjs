// Import the mongoose module
import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        await mongoose.connect(
            process.env.DB_CONN,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        console.log('Successfully connected to MongoDB Atlas.');
    } catch (error) {
        console.log('Could not connect to MongoDB Atlas: ', error);
        process.exit(1);
    }
};

export default connectDb;
