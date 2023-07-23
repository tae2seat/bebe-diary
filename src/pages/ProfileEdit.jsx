import React, { useEffect } from 'react'
import ProfileEditCard from '../components/Cards/ProfileEditCard'
import BabyProfileEditCard from '../components/Cards/BabyProfileEditCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/slices/profileSlice'
import { getBabyProfile } from '../redux/slices/babyProfileSlice'

export default function ProfileEdit() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { name, gender, birthDate, avatar } = useSelector(
    (state) => state.profile,
  )
  const { babyName, babyId, babyFace } = useSelector(
    (state) => state.babyProfile,
  )
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile())
      dispatch(getBabyProfile())
    }
  }, [isLoggedIn])

  const handleClick = (e) => {
    navigate('/')
  }

  return (
    <div>
      <h1 className="text-[#908d96] my-20">Profile Edit Page</h1>
      <div className="flex justify-center gap-24 py-6">
        <ProfileEditCard
          name={name}
          gender={gender}
          birthDate={birthDate}
          avatar={avatar}
        />
        <BabyProfileEditCard
          babyName={babyName}
          babyId={babyId}
          babyFace={babyFace}
        />
      </div>
      <button className="my-10" onClick={handleClick}>
        홈으로 돌아가기
      </button>
    </div>
  )
}
