import config from "../../config.js";
import validate from "../model/post.model.js";
export const validatePost = (req, res, next) => {
    // console.log(req.body);
    const isDataValid = validate(req.body);
    if (!isDataValid) {
        return res
            .status(config.statusCode.BAD_REQUEST)
            .json({ message: "data is not valid ", error: validate.errors })
    }
    next();
}
