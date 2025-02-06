import React,{FC} from'react';
import {useNavigate,Link} from'react-router-dom';
import {Button} from 'antd'



const Home:FC = () => {
  const nav = useNavigate();
  const login=()=>{
    nav('/login');
    // nav({
    //   pathname: '/login',
    //   search: '?b=21',

    // })
  }
  return (<>
  <div>
    <p>Home
      <Button >antd button</Button>
    </p>
    <div>
      <button onClick={login}>登录</button>
      &nbsp;
      <Link to="/register">注册</Link>
    </div>
  </div>
  </>)
}



  export default Home;