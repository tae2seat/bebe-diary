import React, { useEffect, useState } from 'react'
import { loggedApi } from '../axios'
import { useNavigate, useParams } from 'react-router-dom'
import PhotoEditCard from '../components/Cards/diaryEdit/PhotoEditCard'
import DailyEditCard from '../components/Cards/diaryEdit/DailyEditCard'
import GrowthEditCard from '../components/Cards/diaryEdit/GrowthEditCard'
import Loading from './Loading'

export default function DiaryEdit() {
  const { diaryId } = useParams()
  const navigate = useNavigate()

  const [diary, setDiary] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  useEffect(() => {
    getDiary()
  }, [])

  const getDiary = async () => {
    try {
      const response = await loggedApi.get(`/detail/${diaryId}`)
      setDiary(response.data)
      setTitle(response.data.title)
      setContent(response.data.content)
      setWeight(response.data.weight)
      setHeight(response.data.height)
    } catch (error) {
      console.log(error)
      navigate('/diaries')
    }
  }

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

  if (!diary) {
    return <Loading />
  }

  return (
    <>
      <h1 className="text-[#908d96] my-20">Diary Edit Page</h1>
      <div className="flex justify-center gap-16 py-20">
        <div className=" w-1/2 rounded-3xl bg-[#fedcdd]">
          <DailyEditCard
            diary={diary}
            setTitle={setTitle}
            setContent={setContent}
          />
        </div>
        <div className="flex flex-col justify-between gap-8 w-1/4">
          <PhotoEditCard />
          <GrowthEditCard
            diary={diary}
            setWeight={setWeight}
            setHeight={setHeight}
          />
        </div>
      </div>
      <button className="my-10" onClick={onSubmit}>
        다이어리 수정하기
      </button>
    </>
  )
}
