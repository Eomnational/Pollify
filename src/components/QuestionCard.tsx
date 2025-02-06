import React,{FC} from'react';
import styles from './QuestionCard.module.scss';
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from 'antd'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import { useNavigate } from'react-router-dom';

type PropsType={
        _id: string,
        title: string,
        isPublished: boolean,
        isStar: boolean,
        answerCount: number,
        createAt: string, 
}


const QuestionCard:FC<PropsType> = (props: PropsType) => {
    const {_id, title, isPublished, isStar, answerCount, createAt} = props;
    const nav=useNavigate();
    return(
      <div className={styles.container} >
        <div className={styles.title}>
            <div className={styles.left}>
                <a href='#'>{title}</a></div>
            <div className={styles.right}>
                {isPublished ?(<span style={{color:'green'}}>已发布</span>) : (<span style={{color:'red'}}>未发布</span>)}
                &nbsp;
                <span>答卷：{answerCount} </span>
                &nbsp;
                <span>{createAt}</span>
                </div>
        </div>
        <div className={styles['button-container']}>
            <div className={styles.left}>
               <Space>
               <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              问卷统计
            </Button>
               </Space>
               </div>
            <div className={styles.right}>
                <button>标星</button>
                <button>复制</button>
                <button>删除</button>
            </div>
        </div>
    </div>
    )
}

export default QuestionCard