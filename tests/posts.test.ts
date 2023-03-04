import mongoose from "mongoose";
import request from "supertest";
import app from "../src/app";
import Post, { IPost } from "../src/posts/posts.model";
require("dotenv").config();

const mockingoose = require("mockingoose");

/* Connecting to the database before each test. */
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI || "");
});

/* Closing database connection after each test. */
afterAll(async () => {
  await mongoose.connection.close();
});

//Test on real database
describe("GET /posts", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    // expect(res.body.length).toBeGreaterThan(0);
  });
});

//Test on real database
describe("GET /posts", () => {
  it("should return all products", async () => {
    try {
      const res = await request(app).get("/posts");
      expect(res.statusCode).toBe(200);
      // expect(res.body.length).toBeGreaterThan(0);
    } catch (err) {
      console.log(err);
    }
  });
});

// Test with a mocked data
describe("test mongoose Post model", () => {
  it("should return the doc with findById", () => {
    const _doc = {
      title: "Test1",
      content: "This is a test post",
    };

    mockingoose(Post).toReturn(_doc, "findOne");

    Post.findOne({ title: "Test1" }).then((doc) => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
      expect(doc?.title).toEqual("Test1");
    });
  });
});
