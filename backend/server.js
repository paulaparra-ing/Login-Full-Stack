const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());


// LOGIN
app.post('/login', (req, res) => {

    const { usuario, password } = req.body;

    const sql = `
        SELECT * FROM usuarios
        WHERE usuario = ? AND password = ?
    `;

    db.query(sql, [usuario, password], (error, resultados) => {

        if (error) {

            return res.status(500).json({
                mensaje: 'Error del servidor'
            });

        }

        // Usuario correcto
        if (resultados.length > 0) {

            return res.json({
                mensaje: 'Bienvenido'
            });

        }

        // Error login
        res.status(401).json({
            mensaje: 'Error en la autenticación'
        });

    });

});


app.listen(3000, () => {
    console.log('Servidor en puerto 3000');
});