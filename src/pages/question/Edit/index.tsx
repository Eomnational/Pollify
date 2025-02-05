import React,{FC} from'react';
import { useParams } from "react-router-dom";

const Edit:FC = () => {
  const { id='' } = useParams();
  return (<>
  <div>Edit Page{id}</div>
  </>)
}



  export default Edit;