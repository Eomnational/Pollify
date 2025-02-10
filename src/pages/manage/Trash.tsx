import React,{FC,useState} from'react';
import styles from './common.module.scss';
import { Empty, Table, Tag,Button, Space, Typography,Modal } from 'antd';

const {confirm}=Modal;
const { Title } = Typography;
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

const Trash:FC = () => {
  const [list,setList] = useState(rawQuestionList);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title'
      // key: 'title', // 循环列的 key ，它会默认取 dataIndex 的值
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>
      }
    },
    {
      title: '答卷',
      dataIndex: 'answerCount'
    },
    {
      title: '创建时间',
      dataIndex: 'createAt'
    }
  ]
  const TableElem = () => (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button
            type="primary"
            disabled={selectedIds.length === 0}
            // loading={recoverLoading}
            onClick={recover}
          >
            恢复
          </Button>
          <Button danger disabled={selectedIds.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <div style={{ border: '1px solid #e8e8e8' }}>
        <Table
          dataSource={list}
          columns={tableColumns}
          pagination={false}
          rowKey={(q) => q._id}
          rowSelection={{
            type: 'checkbox',
            hideSelectAll: false,
            selectedRowKeys: selectedIds,
            onChange: (selectedRowKeys) => {
              // console.log(selectedRowKeys)
              setSelectedIds(selectedRowKeys as string[])
            }
          }}
        />
      </div>
    </>
  )
  return (
  <>
      <div className={styles.header}>
            <div className={styles.left}>
                <Title level={3}>我的问卷</Title>
            </div>
            <div className={styles.right}>搜索</div>
        </div>
      <div className={styles.content}>
        {list.length===0&&<Empty description="暂无问卷" /> }
        {list.length>0&&<Table dataSource={list} columns={tableColumns} pagination={false}/>}
      </div>
  </>)
}



  export default Trash;