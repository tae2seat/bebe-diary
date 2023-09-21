import React, { useState } from 'react'
import { loggedApi } from '../axios'
import { useNavigate, useParams } from 'react-router-dom'
import PhotoEditCard from '../components/Cards/diaryEdit/PhotoEditCard'
import DailyEditCard from '../components/Cards/diaryEdit/DailyEditCard'
import GrowthEditCard from '../components/Cards/diaryEdit/GrowthEditCard'
import Loading from './Loading'
import useDiary from '../hooks/useDiary'

export default function DiaryEdit() {
  const { diaryId } = useParams()
  const navigate = useNavigate()

  const { data: diary, isLoading, error } = useDiary(diaryId)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await loggedApi.put(`/edit/${diaryId}`, {
        title,
        weight,
        height,
        content,
      })
      navigate(`/diary/${diaryId}`)
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) return <Loading />
  if (error) return <div>failed to load</div>

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-[#908d96] my-8 2xl:my-24">Diary Edit Page</h1>
      <div className="flex justify-center gap-10 w-full">
        <DailyEditCard
          diary={diary}
          setTitle={setTitle}
          setContent={setContent}
        />
        <div className="flex flex-col justify-between gap-2 w-1/5">
          <PhotoEditCard />
          <GrowthEditCard
            diary={diary}
            setWeight={setWeight}
            setHeight={setHeight}
          />
        </div>
      </div>
      <button className="mt-8" onClick={onSubmit}>
        다이어리 수정하기
      </button>
    </div>
  )
}
