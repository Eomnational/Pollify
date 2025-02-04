import React from'react'
function App() {
  //列表页
  //问卷列表数据
  const questionList = [
    {
      id: 'q1',
      title: '问卷1',
      isPublished: false,
    },
    {
      id: 'q2',
      title: '问卷2',
      isPublished: true,
    },
    {
      id: 'q3',
      title: '问卷3',
      isPublished: false,
    },  
    {
      id: 'q4',
      title: '问卷4',
      isPublished: true,
    },
  ]
 function edit(id:string) {
    console.log('编辑问卷', id)
  }
  return (
      <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map((question) => {
          const { id, title, isPublished } = question
          return (
            <div key={id}>
              <strong>{title}</strong>
              &nbsp;
              {isPublished? (
                <span style={{ color: 'green' }}>已发布</span>
              ) : (
                <span style={{ color: 'red' }}>未发布</span>
              )}
              &nbsp;
              <button onClick={()=>{edit(id)}}>编辑</button>
            </div>
          )
        })}
      </div>
      </div>

  )
}

export default App
