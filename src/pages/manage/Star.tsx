import React,{FC,useState} from'react';
import styles from './common.module.scss'
import { Typography, Spin, Empty } from 'antd'
import QuestionCard from '../../components/QuestionCard';

const { Title } = Typography
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

const Star:FC = () => {

  const [list,setList] = useState(rawQuestionList);
  return (
          <>
              <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>星标问卷</Title>
                </div>
                <div className={styles.right}>搜索</div>
            </div>
            <div className={styles.content} >
              {/* 问卷判断 */}
              {list.length === 0 && <Empty description="暂无数据" />}
              { list.length > 0 && list.map(q=>{
                const {_id}=q
                return <QuestionCard key={_id} {...q} />
            })}
            </div>

            <div className={styles.footer}>分页</div>
       </>
  )
} 



export default Star;