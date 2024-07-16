const mysql = require('mysql2/promise');
import * as fs from "fs";
import * as path from "path";

const connection = mysql.createPool({
    host: "mysql-36938976-rugvedraikwar8-9954.i.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_AD4kve8lKi1RNDduwE_",
    database: "defaultdb",
    port:22440,
        ssl: {
          ca: fs.readFileSync(path.resolve(__dirname, "./ca (1).pem")).toString(),
        },
});


// const connection = mysql.createPool({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
// });

export default connection;