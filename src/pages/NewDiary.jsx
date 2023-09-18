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
      <h1 className="text-xl py-4">New Diary Page</h1>
      <DailyCard
        setTitle={setTitle}
        setDate={setDate}
        setContent={setContent}
      />
      <div>
        <PhotoCard />
        <GrowthCard setWeight={setWeight} setHeight={setHeight} />
      </div>
      <button className="my-10" onClick={onSubmit}>
        다이어리 저장하기
      </button>
    </div>
  )
}
