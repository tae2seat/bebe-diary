import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import DailyDetailCard from '../components/Cards/diaryDetail/DailyDetailCard'
import GrowthDetailCard from '../components/Cards/diaryDetail/GrowthDetailCard'
import { loggedApi } from '../axios'
import DeleteButton from '../components/buttons/DeleteButton'
import PhotoDetailCard from '../components/Cards/diaryDetail/PhotoDetailCard'
import GotoButton from '../components/buttons/GotoButton'
import Loading from './Loading'

export default function DiaryDetail() {
  const { diaryId } = useParams()
  const navigate = useNavigate()

  const [diary, setDiary] = useState(null)

  useEffect(() => {
    getDiary()
  }, [])

  const getDiary = async () => {
    try {
      const response = await loggedApi.get(`/detail/${diaryId}`)
      setDiary(response.data)
    } catch (error) {
      console.log(error)
      navigate('/diaries')
    }
  }

  const handleDeleteClick = async () => {
    try {
      const response = await loggedApi.delete(`/delete/${diaryId}`)
      alert('다이어리 삭제 성공!!')
      navigate('/diaries')
    } catch (error) {
      alert('다이어리 삭제 실패!!')
    }
  }

  if (!diary) {
    return <Loading />
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
      <div className="flex px-96">
        <GotoButton
          link={`/diary/${diaryId}/edit`}
          buttonText={'다이어리 수정하기'}
        />
        <DeleteButton onClick={handleDeleteClick} />
      </div>
    </>
  )
}
