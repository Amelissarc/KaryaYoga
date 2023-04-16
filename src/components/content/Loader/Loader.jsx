import React from 'react';
import { Ring } from '@uiball/loaders';

const loader = () => {
    return (
    <div
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10rem',
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

export default loader;
