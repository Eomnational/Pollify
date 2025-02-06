import React, { FC } from'react';
import Styles from './EditCanvas.module.scss';


//临时静态展示Input和Title组件效果
import QuestionTitle from '../../../components/QuestionComponents/QuestionTitle/Component';
import QuestionInput from '../../../components/QuestionComponents/QuestionInput/Component';



const EditCanvas: FC = () => {

    return (
    <div className={Styles.canvas}>
        <div className={Styles['component-wrapper']}>
            <div className={Styles.component}>
                <QuestionTitle/>
            </div>
        </div>
        <div className={Styles['component-wrapper']}>
            <div className={Styles.component}>
                <QuestionInput/>
            </div>
        </div>
    </div>
    )
}


export default EditCanvas;