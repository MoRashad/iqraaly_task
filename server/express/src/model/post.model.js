import Ajv from "ajv"

const ajv = new Ajv()

const postSchema = {
    type: "object",
    properties: {
        title: { type: "string", minLength: 1, maxLength: 200 },
        body: { type: "string", minLength: 1, maxLength: 500 },
    },
    required: ["title", "body"],
    additionalProperties: false,
}

const validate = ajv.compile(postSchema)

export default validate;