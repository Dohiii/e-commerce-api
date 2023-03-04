import { Router, Request, Response } from "express";
import Post, { IPost } from "./posts.model";

const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const post: IPost = new Post({ title, content });
    const savedPost: IPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
