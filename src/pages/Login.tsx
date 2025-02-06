import React,{FC} from'react';
import {useNavigate} from'react-router-dom';


const Login:FC = () => {
  // useTitle('Pollify - 登录');
  const nav = useNavigate();

  // const handleLogin = () => {
  //   nav('/');
  // }
  return (<>
  <div>Login Page</div>
  <div>
    <button onClick={()=>nav(-1)}>返回</button>
  </div>
  </>)
}



  export default Login;