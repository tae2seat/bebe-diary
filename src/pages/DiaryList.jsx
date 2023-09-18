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
    <section className="flex flex-col">
      <h1 className="text-[#908d96] my-8 2xl:my-24">Diray List Page</h1>
      {diaries.length > 0 ? (
        <div className="grid grid-cols-4 mx-auto gap-x-10 2xl:gap-x-20 gap-y-6 2xl:gap-y-10">
          {diaries.map((diary, index) => (
            <Link
              to={`/diary/${diary.id}`}
              key={diary.id}
              className="flex flex-col items-center rounded-2xl hover:scale-105 w-40 p-2 border-gray-100 border-2"
            >
              <img
                className="w-32 h-32 rounded-2xl p-3 bg-slate-100"
                src={baby}
                alt="baby"
              />
              <div className="w-full text-center truncate">
                <p className="text-sm pt-2 px-2">{diary.title}</p>
                <p className="text-xs">
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
