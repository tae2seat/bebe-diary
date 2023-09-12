import React, { useEffect, useState } from 'react'
import { loggedApi } from '../axios'
import { Link } from 'react-router-dom'
import baby from '../images/ICON_11.png'
import moment from 'moment'
import GotoButton from '../components/buttons/GotoButton'
import useSWR from 'swr'

export default function DiaryList() {
  const getDiaries = async () => {
    try {
      const response = await loggedApi.get('/')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  const { data: diaries, error, isLoading } = useSWR('/', getDiaries)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>failed to load</div>

  return (
    <section className="flex flex-col ">
      <h1 className="text-[#908d96] my-20">Diray List Page</h1>
      {diaries.length > 0 ? (
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
        <div className="w-full h-auto mb-20">
          <p className="text-lg text-gray-500 py-10">
            작성한 다이어리가 없습니다. 다이어리를 쓰러가세요!
          </p>
          <GotoButton buttonText={'다이어리 쓰기'} link={'/new'} />
        </div>
      )}
    </section>
  )
}

{
  /* <Link to='/new'>다이어리 새로쓰기</Link> */
}
