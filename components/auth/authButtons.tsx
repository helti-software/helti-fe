import React from 'react';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';

const AuthButtons = () => {
    return (
        <div className="flex flex-row items-center">
            <LoginForm />
            <RegisterForm />
        </div>
    );
};

export default AuthButtons;