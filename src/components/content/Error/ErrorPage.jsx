import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
    <div
        style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        }}
    >
        <img
        src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=400&t=st=1680134750~exp=1680135350~hmac=9451884cf3100427ec899ffef2e0a742f918ec8f142d874ec0c0b110b41f1f94"
        alt="error"
        style={{ width: '500px', margin: 100 }}
        />
        <Link className="btn btn-dark" to={'/'}>
            Return Home
        </Link>
    </div>
    );
};

export default ErrorPage;
