import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = ({ children, to, ...rest }) => {
    return (
        <Link to={to} style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex' }} {...rest}>
            {children}
        </Link>
    );
};

export default LoginButton;