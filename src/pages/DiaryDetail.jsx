import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import DailyDetailCard from '../components/Cards/diaryDetail/DailyDetailCard'
import GrowthDetailCard from '../components/Cards/diaryDetail/GrowthDetailCard'
import CheckDetailCard from '../components/Cards/diaryDetail/CheckDetailCard'
import { loggedApi } from '../axios'
import DeleteButton from '../components/buttons/DeleteButton'

export default function DiaryDetail() {
  const { diaryId } = useParams()
  const navigate = useNavigate()

  const [diary, setDiary] = useState(null)

  const getDiary = async () => {
    try {
      const response = await loggedApi.get(`/detail/${diaryId}`)
      setDiary(response.data)
    } catch (error) {
      console.log(error)
      navigate('/diaries')
    }
  }

  useEffect(() => {
    getDiary()
  }, [loggedApi]) //왜??

  const handleClickDelete = async () => {
    try {
      const response = await loggedApi.delete(`/delete/${diaryId}`)
      alert('다이어리 삭제 성공!!')
      navigate('/diaries')
    } catch (error) {
      alert('다이어리 삭제 실패!!')
    }
  }

  if (!diary) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-[#908d96]">Diary Detail Page</h1>
      <div className="flex flex-col md:flex md:flex-row justify-center items-center gap-10">
        <DailyDetailCard diary={diary} />
        <div className="flex flex-col w-96 gap-12 md:gap-6 mb-12 ">
          <GrowthDetailCard diary={diary} />
          <CheckDetailCard />
        </div>
      </div>
      <button>삭제하기</button>
      <div className="flex justify-center items-center w-full h-14">
        <Link
          to={`/diary/${diaryId}/edit`}
          className=" flex justify-center items-center w-40 h-8 px-4 rounded-2xl bg-blue-100 "
        >
          수정하기
        </Link>
        <DeleteButton onClick={handleClickDelete} />
      </div>
    </div>
  )
}
