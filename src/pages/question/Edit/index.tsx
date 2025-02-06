import React,{FC} from'react';
import { useParams } from "react-router-dom";
import Styles from './index.module.scss';
const Edit:FC = () => {
  const { id='' } = useParams();
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
              <div style={{height: '900px'}}>画布测试滚动</div>
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