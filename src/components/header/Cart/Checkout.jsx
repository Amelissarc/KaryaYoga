import React, { useState } from 'react';


export function Checkout() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [tipoTarjeta, setTipoTarjeta] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [clave, setClave] = useState('');
  const [cuotas, setCuotas] = useState('');
  const [confirmacion, setConfirmacion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar la información ingresada por el usuario a través de una solicitud HTTP a tu servidor.
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Tipo de tarjeta de crédito:
        <input type="text" value={tipoTarjeta} onChange={(event) => setTipoTarjeta(event.target.value)} />
      </label>
      <br />
      <label>
        Número de tarjeta de crédito:
        <input type="text" value={numeroTarjeta} onChange={(event) => setNumeroTarjeta(event.target.value)} />
      </label>
      <br />
      <label>
        Clave:
        <input type="password" value={clave} onChange={(event) => setClave(event.target.value)} />
      </label>
      <br />
      <label>
        Cuotas:
        <input type="number" value={cuotas} onChange={(event) => setCuotas(event.target.value)} />
      </label>
      <br />
      <label>
        Confirmación:
        <input type="password" value={confirmacion} onChange={(event) => setConfirmacion(event.target.value)} />
      </label>
      <br />
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}
