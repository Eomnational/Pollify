import { getQuestionService } from '../services/question'
import { resetComponents } from '../store/componentsReducer'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// 获取单个问卷信息
export function useLoadQuestionData() {
  const { id = '' } = useParams()
  const dispatch = useDispatch()
  const {data,loading,error,run}=useRequest(async (id:string) => {
     if(!id) throw new Error('id is required')
     const data = await getQuestionService(id)
     return data
  },
   {
    manual: true,
    
  })
  useEffect(() => {
    if(!data) return 
    const { title='',componentList=[] } = data
    dispatch(resetComponents({ componentList }))
  },[data])
  useEffect(() => {
   run(id)
  },[id])
  return { loading, error}
}

export default useLoadQuestionData