import mysql from "mysql2";
import config from "../../config.js";



export const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
})

console.log(config.host);
console.log(config.user);
console.log(config.database);
console.log(config.password);

export function connectToDb() {
    connection.connect(function (err) {
        if (err) {
            return console.error('error: ' + err.message);
        }

        console.log('Connected to the MySQL server.');
    });

    connection.execute(
        'CREATE TABLE iqraaly.posts ( id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, body VARCHAR(500) NOT NULL)',
        function (err, results, fields) {
        }
    );


    // connection.query("INSERT INTO iqraaly.posts SET ?"
    //     , { title: "sa12321312313", body: "dasjadfjadlkfjdsf2321313" },
    //     (err, results) => {
    //         if (err) console.log(err);
    //         console.log(results);
    //     }
    // )
}

