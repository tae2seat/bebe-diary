import React, { useEffect, useState } from 'react'
import { loggedApi } from '../axios'
import DailyCard from '../components/Cards/newDiary/DailyCard'
import GrowthCard from '../components/Cards/newDiary/GrowthCard'
import PhotoCard from '../components/Cards/newDiary/PhotoCard'

export default function NewDiary() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [date, setDate] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await loggedApi.post('/', {
        title,
        weight,
        height,
        content,
      })
      console.log('성공~!!!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1 className="text-[#908d96] my-16">New Diary Page</h1>
      <div className="flex justify-center gap-16 my-20">
        <div className=" w-1/2 rounded-3xl bg-[#fedcdd]">
          <DailyCard
            setTitle={setTitle}
            setDate={setDate}
            setContent={setContent}
          />
        </div>
        <div className="flex flex-col justify-between gap-8 w-1/4">
          <PhotoCard />
          <GrowthCard setWeight={setWeight} setHeight={setHeight} />
        </div>
      </div>
      <button className="my-1" onClick={handleSubmit}>
        다이어리 저장하기
      </button>
    </>
  )
}
