import React from 'react';
import { Ring } from '@uiball/loaders';

const Loader = () => {
    return (
    <div
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5rem',
        minHeight: '500px',
        }}
    >
        <Ring 
            size={80}
            lineWeight={5}
            speed={2} 
            color="#561220" 
        />
    </div>
    );
};

export default Loader;
