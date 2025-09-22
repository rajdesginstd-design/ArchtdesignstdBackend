import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectdbs = await mongoose.connect(
      `${process.env.MONGODB_URI}/${db_name}`
    );
    console.log(`\n mongodb connectdb:${connectdbs.connection.host} `);
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectDB;
