import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.DATABASE_URI);
    console.log(
      `\nConnected To Database !! DB HOST :${connectionInstance.connection.host} `
    );
  } catch (err) {
    console.log(`MONGODB ERROR !! ${err.message}`);
  }
};

export default connectDB;
