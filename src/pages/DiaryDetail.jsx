import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DailyDetailCard from '../components/Cards/diaryDetail/DailyDetailCard'
import GrowthDetailCard from '../components/Cards/diaryDetail/GrowthDetailCard'
import { loggedApi } from '../axios'
import DeleteButton from '../components/buttons/DeleteButton'
import PhotoDetailCard from '../components/Cards/diaryDetail/PhotoDetailCard'
import GotoButton from '../components/buttons/GotoButton'
import Loading from './Loading'
import useDiary from '../hooks/useDiary'

export default function DiaryDetail() {
  const { diaryId } = useParams()
  const navigate = useNavigate()

  const { data: diary, error, isLoading } = useDiary(diaryId)

  const handleDeleteClick = async () => {
    try {
      const response = await loggedApi.delete(`/delete/${diaryId}`)
      alert('다이어리 삭제 성공!!')
      navigate('/diaries')
    } catch (error) {
      alert('다이어리 삭제 실패!!')
    }
  }

  if (isLoading) return <Loading />
  if (error) return <div>failed to load</div>

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[#908d96] my-8 2xl:my-24">Diary Detail Page</h1>
      <div className="flex justify-center gap-10 w-full ">
        <DailyDetailCard diary={diary} />
        <div className="flex flex-col justify-between gap-2 w-1/5">
          <PhotoDetailCard />
          <GrowthDetailCard diary={diary} />
        </div>
      </div>
      <div className="flex mt-8 gap-10 ">
        <GotoButton
          link={`/diary/${diaryId}/edit`}
          buttonText={'다이어리 수정하기'}
        />
        <DeleteButton onClick={handleDeleteClick} />
      </div>
    </div>
  )
}
