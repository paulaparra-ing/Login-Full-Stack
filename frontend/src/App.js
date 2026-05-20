import { useState } from 'react';
import './App.css';

function App() {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const login = async () => {

    const respuesta = await fetch('http://localhost:3000/login', {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        usuario,
        password
      })

    });

    const data = await respuesta.json();

    setMensaje(data.mensaje);

  };

  return (

    <div className="container">

      <div className="card">

        <h1>Iniciar Sesión</h1>

        <input
          type="text"
          placeholder="Usuario"
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>
          Entrar
        </button>

        <p>{mensaje}</p>

      </div>

    </div>

  );

}

export default App;