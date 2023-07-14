import React, { useEffect, useState } from 'react'
import { loggedApi } from '../axios'
import { useNavigate, useParams } from 'react-router-dom'
import PhotoEditCard from '../components/Cards/diaryEdit/PhotoEditCard'
import DailyEditCard from '../components/Cards/diaryEdit/DailyEditCard'
import GrowthEditCard from '../components/Cards/diaryEdit/GrowthEditCard'

export default function DiaryEdit() {
  const { diaryId } = useParams()
  const navigate = useNavigate()

  const [diary, setDiary] = useState(null)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [text, setText] = useState('')

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

  useEffect(() => {
    getDiary()
  }, [loggedApi])

  const handleSubmit = async (e) => {
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
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1 className="text-[#908d96] my-8">Diary Edit Page</h1>
      <div className="flex justify-center gap-16 my-16">
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
      <button className="my-1" onClick={handleSubmit}>
        다이어리 저장하기
      </button>
    </>
  )
}
