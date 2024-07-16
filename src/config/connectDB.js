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

export default connection;