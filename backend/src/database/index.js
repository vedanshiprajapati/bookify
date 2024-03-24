import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    const mongooseconnectRS = await mongoose.connect(`
            ${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log("mongoDB is connected");
  } catch (error) {
    console.log("CONNECT DB FN ERROR", error);
    process.exit(1);
  }
};
export default ConnectDb;
