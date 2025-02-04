import React,{FC,useState} from'react';
import QuestionCard from '../components/QuestionCard';
import styles from './List.module.scss';

 const rawQuestionList = [
    {
        _id: 'q1',
        title: '问卷1',
        isPublished: false,
        isStar:false,
        answerCount: 10,
        createAt: '3月1日 13:30', 
      },
      {
        _id: 'q2',
        title: '问卷2',
        isPublished: true,
        isStar:true,
        answerCount: 20,
        createAt: '3月2日 13:30',
      },
      {
        _id: 'q3',
        title: '问卷3',
        isPublished: false,
        isStar:true,
        answerCount: 30,
        createAt: '3月3日 13:30',
      },  
      {
        _id: 'q4',
        title: '问卷4',
        isPublished: true,
        isStar:false,
        answerCount: 40,
        createAt: '3月4日 13:30',
      },
 ]


const List:FC = () => {
    const [list,setList] = useState(rawQuestionList);
    return(<>
    <div className={styles.header}>
        <div className={styles.left}>
            <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>搜索</div>
    </div>
    <div className={styles.content} >{rawQuestionList.map(q=>{
        const {_id}=q
        return <QuestionCard key={_id} {...q} />
    })}</div>
    <div className={styles.footer}>footer</div>
    </>)
}

export default List;