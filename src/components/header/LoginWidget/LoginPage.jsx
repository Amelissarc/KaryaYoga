import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Styles from './LoginPage.css';

export const LoginWidget = ({ onLogin }) => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const titleName = 'Sign in';

  const handleLoginClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza el inicio de sesión con los datos del usuario

    // Simulación de inicio de sesión exitoso
    setIsLoggedIn(true);

    // Mostrar mensaje de aviso
    alert('Inicio de sesión exitoso');

    onLogin();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div className="loginWidget" onClick={handleLogout}>
        <i className="fa-regular fa-user"></i>
        <span>Logged in</span>
      </div>
    );
  }

  if (!showForm) {
    return (
      <div className="loginWidget" onClick={handleLoginClick}>
        <i className="fa-regular fa-user"></i>
        <span>{titleName}</span>
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit} className="loginPage">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginWidget;
