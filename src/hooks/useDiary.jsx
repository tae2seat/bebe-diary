import useSWR from 'swr'
import { loggedApi } from '../axios'

export default function useDiary(diaryId) {
  const getDiary = async () => {
    try {
      const response = await loggedApi.get(`/detail/${diaryId}`)
      return response.data
    } catch (error) {
      console.log(error)
      navigate('/diaries')
    }
  }
  const { data, error, isLoading } = useSWR(`/detail/${diaryId}`, getDiary)
  return {
    data,
    error,
    isLoading,
  }
}
