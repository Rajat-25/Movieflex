import mongoose from 'mongoose';

const connectToDb = async () => {
  const connectDb = process.env.CONNECT_DB || '';
  await mongoose.connect(connectDb);
};

export default connectToDb;
