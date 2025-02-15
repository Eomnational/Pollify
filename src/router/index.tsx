import React from'react';
import { createBrowserRouter } from'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ManageLayout from '../layout/ManageLayout';
import QuestionCard from '../components/QuestionCard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import List from '../pages/manage/List';
import Trash from '../pages/manage/Trash';
import Star from '../pages/manage/Star';
import Edit from '../pages/question/Edit';
import Stat from '../pages/question/Stat';
import QuestionLayout from '../layout/QuestionLayout';


const router=createBrowserRouter([
    { 
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path:'register',
                element: <Register/>
            },
            {
                path: 'manage',
                element: <ManageLayout/>,
                children: [
                    {
                        path: 'list',
                        element: <List/>
                    },
                    {
                        path:'star',
                        element: <Star/>
                    },
                    {
                        path: 'trash',
                        element: <Trash/>
                    },
                ]
            },
            {
                path: '*',//404路由配置写在最后
                element: <NotFound/>
            },
            
        ],
    },
    {
        path: 'question',
        element:<QuestionLayout/>,
        children: [
            {
                path: 'edit/:id',
                element: <Edit/>
            },
            {
                path:'stat/:id',
                element: <Stat/>
            },
        ]
    },
]);

export default router;
// 常用的路由，常量
export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_INDEX_PATHNAME = '/manage/list'