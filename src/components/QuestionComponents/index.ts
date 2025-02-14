import QuestionInputConf,{ QuestionInputPropsType } from "./QuestionInput";
import QuestionTitleConf,{ QuestionTitlePropsType } from "./QuestionTitle";
import type{FC} from 'react';
//各个组件的props type
export type ComponentPropsType = QuestionInputPropsType & QuestionTitlePropsType;

//各个组件的配置
export type ComponentConfType = {
    title: string
    type: string
    Component: React.FC<ComponentPropsType>,
    defaultProps: ComponentPropsType
}
//全部组件配置的列表
const ComponentConfList: ComponentConfType[] = [QuestionInputConf,QuestionTitleConf];


export function getComponentConfByType(type: string){
    return ComponentConfList.find(item => item.type === type);
};