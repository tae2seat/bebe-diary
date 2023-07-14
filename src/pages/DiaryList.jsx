import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { loggedApi } from '../axios'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default function DiaryList() {
  const [diaries, setDiaries] = useState([])

  useEffect(() => {
    getDiaries()
  }, [])

  const getDiaries = async () => {
    try {
      const response = await loggedApi.get('/')
      setDiaries(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="flex flex-col ">
      <h1 className="text-[#908d96] my-8">Diray List Page</h1>

      {diaries ? (
        diaries.map((diary, index) => (
          <Link to={`/diary/${diary.id}`} key={diary.id} className="">
            <li
              className={` rounded-lg bg-slate-200 ${
                index % 2 === 1 ? 'col-span-2 ' : ''
              }`}
            >
              <img />
              <span>{diary.title}</span>
            </li>
          </Link>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  )
}

{
  /* <Link to='/new'>다이어리 새로쓰기</Link> */
}

{
  /* <li className={`flex flex-col items-center bg-green-200 ${diary.id % 2 === 0 ? 'h-32' : 'h-16'}`}>
                                   <img className='w-32 h-32 bg-red-200' />
                                    <span className='bg-yellow-100'>{diary.title}</span>
                                    <span>{moment(diary.createdAt).format('YYYY-MM-DD')}</span>
                                </li> */
}
