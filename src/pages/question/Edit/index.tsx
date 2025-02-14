import React,{FC, useEffect} from'react';
import { useParams } from "react-router-dom";
import Styles from './index.module.scss';
import EditCanvas from './EditCanvas';
import useGetComponentInfo from '../../../hooks/useGetComponent';
import { getQuestionService } from '../../../services/question';
import useLoadQuestionData from '../../../hooks/useLoadQuestionData';
import { useDispatch } from 'react-redux';
import { updateComponentList } from '../../../store/componentsReducer';


const Edit:FC = () => {
  const { id='' } = useParams();
  const dispatch = useDispatch();
  // const {componentList}=useGetComponentInfo();
  // console.log('componentList:',componentList);
  // const { loading }=useLoadQuestionData();
  useEffect(()=>{
    async function fn() {
       const data = await getQuestionService(id);
       console.log('data:',data);
       // 更新 Redux store 中的 componentList
      dispatch(updateComponentList(data.componentList));
    }
          fn();
  },[dispatch,id])

    const {componentList}=useGetComponentInfo();
    
  return (
  <>
        <div className={Styles.container}>
            <div style={{backgroundColor: '#fff',height: '50px'}}>
              Header
            </div>
            <div className={Styles['content-wrapper']}>
              <div className={Styles.content}>
                  <div className={Styles.left}>left</div>
                  <div className={Styles.main}>
                    <div className={Styles['canvas-wrapper']}>
                      <EditCanvas/>
                    </div>
                  </div>
                  <div className={Styles.right}>right</div>
              </div>
            </div>
      </div>
  </>
  )
}



  export default Edit;