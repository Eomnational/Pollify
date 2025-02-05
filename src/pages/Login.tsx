import React,{FC} from'react';
import {useNavigate} from'react-router-dom';


const Login:FC = () => {
  const nav = useNavigate();

  const handleLogin = () => {
    nav('/');
  }
  return (<>
  <div>Login Page</div>
  <div>
    <button onClick={handleLogin}>返回</button>
  </div>
  </>)
}



  export default Login;