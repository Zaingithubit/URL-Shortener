import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  console.log("Mongo URI:", uri); // Just for debugging

  if (!uri) {
    console.error("❌ MONGO_URI is undefined. Check your .env file.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
