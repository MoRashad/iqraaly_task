import config from "../../config.js";
import {
    addPostToDb,
    deletePostFromDb,
    getAllPostsFromDb,
    getPostByIdFromDb,
} from "../services/posts.serveices.js";


export const addPost = async (req, res) => {
    console.log(req.body);
    try {
        const post = await addPostToDb(req.body);
        if (post.affectedRows === 0)
            return res
                .status(config.statusCode.SERVER_ERROR)
                .json({ message: "something went wrong while adding post" });
        return res
            .status(config.statusCode.CREATED)
            .json({
                message: "post created",
                rowsAffected: post.affectedRows,
                post: req.body,
            });
    } catch (error) {
        return res
            .status(config.statusCode.SERVER_ERROR)
            .json({ message: "something went wrong", error: error.message });
    }
};

export const getAllPosts = async (req, res) => {
    try {
        const posts = await getAllPostsFromDb();
        if (posts.length === 0 || !posts)
            return res
                .status(config.statusCode.NOT_FOUND)
                .json({ message: "no posts were found" });
        return res.status(config.statusCode.OK).json(posts);
    } catch (error) {
        return res
            .status(config.statusCode.SERVER_ERROR)
            .json({ message: "something went wrong", error: error.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const post = await getPostByIdFromDb(id);
        if (post.length === 0 || !post)
            return res
                .status(config.statusCode.NOT_FOUND)
                .json({ message: "post was not found" });
        return res.status(config.statusCode.OK).json(post);
    } catch (error) { }
};

export const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const deletedPost = await deletePostFromDb(id);
        if (deletedPost.affectedRows === 0 || !deletedPost)
            return res
                .status(config.statusCode.NOT_FOUND)
                .json({ message: "post was not found" });
        return res
            .status(config.statusCode.OK)
            .json({ message: "post deleted successfully" });
    } catch (error) {
        return res
            .status(config.statusCode.SERVER_ERROR)
            .json({ message: "something went wrong", error: error.message });
    }
};
