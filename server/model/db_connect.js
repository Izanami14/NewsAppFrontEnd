var mysql = require('mysql');
class DatabaseObject {
    constructor() {
        this.connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'test1234',
            database: 'test'
        });
    }
    async query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
                return rows;
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}

module.exports = DatabaseObject