import express from "express";
import { addPost, deletePost, getAllPosts, getPostById } from "../controllers/posts.controller.js";
import { validatePost } from "../middleware/schemaValidator.middleware.js";

const router = express.Router();

router.get("/posts", getAllPosts);
router.post("/posts", validatePost, addPost);
router.get("/posts/:id", getPostById);
router.delete("/posts/:id", deletePost);


export default router;