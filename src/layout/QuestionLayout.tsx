import React,{FC,Suspense} from'react';
import {Outlet} from "react-router-dom";
const QuestionLayout:FC = () => {
  return (
        <>
        {/* <div>
        QuestionLayout header
        </div> */}
        <div>
          <Suspense fallback={<div>Loading...</div>}>
          <Outlet/>
          </Suspense>
          
        </div>
        </>
  )
}



  export default QuestionLayout;