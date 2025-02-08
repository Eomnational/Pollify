import React,{FC, useEffect} from'react';
import { useParams } from "react-router-dom";
import Styles from './index.module.scss';
import EditCanvas from './EditCanvas';
import { getQuestionService } from '../../../services/question';
const Edit:FC = () => {
  const { id='' } = useParams();
  useEffect(()=>{
    async function fn() {
       const data = await getQuestionService(id);
       console.log('data:',data);
       
    }
          fn();
  },[])
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
              <EditCanvas />
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