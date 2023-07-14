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
      <div className="grid grid-cols-4 grid-rows-4 gap-2 ">
        <div className="col-start-1 col-end-2 row-start-1 row-end-3  bg-red-300">
          text
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-blue-50">
          text
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-3 bg-red-300 ">
          text
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-2  bg-blue-50 ">
          text
        </div>
        <div className="col-start-1 col-end-2 row-start-4 row-end-5 bg-blue-50 ">
          text
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-5 bg-red-300 ">
          text
        </div>
        <div className="col-start-3 col-end-4 row-start-4 row-end-5 bg-blue-50  ">
          text
        </div>
        <div className="col-start-4 col-end-5 row-start-3 row-end-5  bg-red-300  ">
          text
        </div>
      </div>

      {/* {   diaries ? diaries.map((diary, index) => (
                    <Link to={`/diary/${diary.id}`} key={diary.id} className='' >
                            <li className={` rounded-lg bg-slate-200 ${index % 2 === 1 ? 'col-span-2 ' : ''}`}>
                                <img />
                                <span>{diary.title}</span>
                            </li>
                    </Link>
                    )) : <h1>Loading...</h1> 
                } */}
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
