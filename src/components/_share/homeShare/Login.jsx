import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

const Login = () => {
  return (
    <a className="login">
      <button>
        <FaRegUserCircle className="login__icon" />
        <p>ĐĂNG NHẬP</p>
      </button>
    </a>
  );
};

export default Login;
