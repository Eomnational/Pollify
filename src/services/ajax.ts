import axios from "axios";
import { message } from 'antd';


//基础baseUrl
const baseUrl="http://127.0.0.1:4523/m1/5825704-5511128-default";
const instance=axios.create({
    baseURL:baseUrl,
    timeout:10000,
});

//response拦截器统一处理
instance.interceptors.response.use(
    res=>{
        const resData=( res.data || {} ) as ResType;
        const {code,data, msg} = resData;
        if(code!==0){
            if(msg){
                message.error(msg);
            }
            throw new Error(msg);
        }
        return data as any
    })
export default instance;

export type ResType={
    code:number,
    data?:ResDataType,
    msg?:string,
}

export type ResDataType={
    [key:string]:any
}