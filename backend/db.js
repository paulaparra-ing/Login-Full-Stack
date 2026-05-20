const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3116213207',
    database: 'login_db'
});

connection.connect((error) => {

    if (error) {
        console.log(error);
    } else {
        console.log('MySQL conectado');
    }

});

module.exports = connection;