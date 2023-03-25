import React from 'react';

export const LoginWidget = () => {
    const titleName = 'Sing in';
return (
    <div className='loginWidge'>
        <i className="fa-regular fa-user"></i>
        <span>{titleName}</span>
    </div>
);
};

export default LoginWidget;
