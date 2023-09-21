import React, { useState } from 'react'
import { loggedApi } from '../axios'
import DailyCard from '../components/Cards/newDiary/DailyCard'
import GrowthCard from '../components/Cards/newDiary/GrowthCard'
import PhotoCard from '../components/Cards/newDiary/PhotoCard'
import { useNavigate } from 'react-router-dom'

export default function NewDiary() {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [date, setDate] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await loggedApi.post('/', {
        title,
        weight,
        height,
        content,
      })
      if (response.status === 200) {
        navigate('/diaries')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[#908d96] my-8 2xl:my-24">New Diary Page</h1>
      <div className="flex justify-center gap-10 w-full">
        <DailyCard
          setTitle={setTitle}
          setDate={setDate}
          setContent={setContent}
        />
        <div className="flex flex-col justify-between gap-2 w-1/5">
          <PhotoCard />
          <GrowthCard setWeight={setWeight} setHeight={setHeight} />
        </div>
      </div>
      <button className="mt-8" onClick={onSubmit}>
        다이어리 저장하기
      </button>
    </div>
  )
}
