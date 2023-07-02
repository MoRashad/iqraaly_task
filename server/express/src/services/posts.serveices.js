import { connection } from "../helpers/dbConnection.js";

export async function addPostToDb(post) {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO iqraaly.posts SET ?"
            , post,
            (err, results) => {
                if (err) console.log(err);
                console.log(results);
                resolve(results)
            }
        )
    });
}

export async function getAllPostsFromDb() {
    return new Promise(function (resolve, reject) {
        connection.query("SELECT * FROM iqraaly.posts",
            (err, results) => {
                if (err) return reject(err);
                console.log(results);
                resolve(results)
            })
    })
}

export async function getPostByIdFromDb(id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM iqraaly.posts WHERE id=${id}`,
            (err, results) => {
                if (err) {
                    console.log(err)
                    reject(err)
                };
                console.log(results);
                resolve(results)
            })
    })
}

export async function deletePostFromDb(id) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM iqraaly.posts WHERE id = ${id}`,
            (err, results) => {
                if (err) reject(err);
                console.log(results);
                resolve(results);
            })
    });
}