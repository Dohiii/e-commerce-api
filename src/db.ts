import mongoose, { ConnectOptions } from "mongoose";
require("dotenv").config();

// const options: ConnectOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  } catch (error) {
    console.log(process.env.MONGODB_URI);
    console.error("Failed to connect to MongoDB", error);
  }
}

export { connect };
