import React from "react";
import {Link} from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";



const UserInfo = () => {
    return (
        <>
        <Link to={LOGIN_PATHNAME}>登录</Link>
        </>
    )
}

export default UserInfo;