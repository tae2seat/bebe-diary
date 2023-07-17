import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import DailyDetailCard from '../components/Cards/diaryDetail/DailyDetailCard'
import GrowthDetailCard from '../components/Cards/diaryDetail/GrowthDetailCard'
import { loggedApi } from '../axios'
import DeleteButton from '../components/buttons/DeleteButton'
import PhotoDetailCard from '../components/Cards/diaryDetail/PhotoDetailCard'

export default function DiaryDetail() {
  const { diaryId } = useParams()
  const navigate = useNavigate()

  const [diary, setDiary] = useState(null)

  const getDiary = async () => {
    try {
      const response = await loggedApi.get(`/detail/${diaryId}`)
      setDiary(response.data)
    } catch (error) {
      console.log(error)
      navigate('/diaries')
    }
  }

  useEffect(() => {
    getDiary()
  }, [loggedApi]) //왜??

  const handleClickDelete = async () => {
    try {
      const response = await loggedApi.delete(`/delete/${diaryId}`)
      alert('다이어리 삭제 성공!!')
      navigate('/diaries')
    } catch (error) {
      alert('다이어리 삭제 실패!!')
    }
  }

  if (!diary) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1 className="text-[#908d96] my-20">Diary Detail Page</h1>
      <div className="flex justify-center gap-16 py-20">
        <div className=" w-1/2 rounded-3xl bg-[#fedcdd]">
          <DailyDetailCard diary={diary} />
        </div>
        <div className="flex flex-col justify-between gap-8 w-1/4">
          <PhotoDetailCard />
          <GrowthDetailCard diary={diary} />
        </div>
      </div>
      <Link to={`/diary/${diaryId}/edit`}>수정하기</Link>
      <DeleteButton onClick={handleClickDelete} />
    </>
  )
}
