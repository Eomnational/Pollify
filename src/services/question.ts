import axios,{ ResDataType }from './ajax'; 



//获取单个问卷信息
export async function getQuestionService(id:string):Promise<ResDataType>{
    const url =  `/api/question/${id}`
    const data = (await axios.get(url)) as ResDataType;
    return data;
}
