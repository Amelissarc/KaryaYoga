import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loader = () => {
    return (
    <div
        style={{
        width: '100vw',
        heigth: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}
    >
        <CircleLoader color="#c737d7" size={90} />
    </div>
    );
};

export default Loader;
