import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
function ButtonLogin() {
  return (
    <div className="buttonLogin">
      <BiUserCircle className="buttonLogin__iconUser" />
      <p className="buttonLogin__text">Đăng nhập</p>
    </div>
  );
}

export default ButtonLogin;
