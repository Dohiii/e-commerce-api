import mongoose from "mongoose";
require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI || "");
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("Database connection", () => {
  test("should connect to MongoDB", async () => {
    expect(mongoose.connection.readyState).toBe(1);
  });
});
