import React from 'react'
import ProfileEditCard from '../components/Cards/ProfileEditCard'
import BabyProfileEditCard from '../components/Cards/BabyProfileEditCard'
import { useNavigate } from 'react-router-dom'

export default function ProfileEdit() {
  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate('/')
  }

  return (
    <div>
      <h1 className="text-[#908d96] my-16">Profile Edit Page</h1>
      <div className="flex justify-center gap-32 px-20 py-10 mx-8">
        <ProfileEditCard />
        <BabyProfileEditCard />
      </div>
      <button className="my-10" onClick={handleClick}>
        홈으로 돌아가기
      </button>
    </div>
  )
}
