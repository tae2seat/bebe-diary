import React, { useEffect, useState } from 'react'
import { loggedApi } from '../axios'
import { Link } from 'react-router-dom'
import baby from '../images/ICON_11.png'
import moment from 'moment'
import Loading from './Loading'

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

  if (!diaries) {
    return <Loading />
  }

  return (
    <section className="flex flex-col ">
      <h1 className="text-[#908d96] my-20">Diray List Page</h1>
      {diaries ? (
        <div className="grid grid-cols-4 gap-20 py-8 px-40">
          {diaries.map((diary, index) => (
            <Link
              to={`/diary/${diary.id}`}
              key={diary.id}
              className="flex flex-col rounded-2x hover:scale-105"
            >
              <img
                className="w-56 h-56 rounded-2xl p-6 bg-slate-100"
                src={baby}
                alt="baby"
              />
              <div className="w-full h-20 text-center pt-3 truncate ">
                <p className="text-lg pt-3">{diary.title}</p>
                <p className="text-sm ">
                  {moment(diary.createdAt).format('YYYY-MM-DD')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  )
}

{
  /* <Link to='/new'>다이어리 새로쓰기</Link> */
}
