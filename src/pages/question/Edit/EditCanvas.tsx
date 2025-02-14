import React, { Component, FC } from'react';
import Styles from './EditCanvas.module.scss';
import { getComponentConfByType } from '../../../components/QuestionComponents/index';


//临时静态展示Input和Title组件效果
import QuestionTitle from '../../../components/QuestionComponents/QuestionTitle/Component';
import QuestionInput from '../../../components/QuestionComponents/QuestionInput/Component';
import useGetComponentInfo from '../../../hooks/useGetComponent';
import { ComponentInfoType } from '../../../store/componentsReducer';

function getComponent(componentInfo: ComponentInfoType){
    const { type, props } = componentInfo;
    const ComponentConf = getComponentConfByType(type);
    if (!ComponentConf) return null;
    const { Component } = ComponentConf;
    return <Component {...props} />
}

const EditCanvas: FC = () => {
   const { componentList=[] } = useGetComponentInfo();

    return (
    <div className={Styles.canvas}>
        {componentList.map((item) => {
            const{id}=item;
            return(
            <div key={id} className={Styles['component-wrapper']}>
                <div className={Styles.component}>
                    {getComponent(item)}
                  </div>
            </div>
            )
        })}
        {/* <div className={Styles['component-wrapper']}>
            <div className={Styles.component}>
                <QuestionTitle/>
            </div>
        </div>
        <div className={Styles['component-wrapper']}>
            <div className={Styles.component}>
                <QuestionInput/>
            </div>
        </div> */}
    </div>
    )
}


export default EditCanvas;