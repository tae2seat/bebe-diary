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
  const { babyName, babyId, babyFace, expectDate, babyGender } = useSelector(
    (state) => state.babyProfile,
  )
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile())
      dispatch(getBabyProfile())
    }
  }, [])

  const goToHome = (e) => {
    navigate('/')
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-[#908d96] my-8 2xl:my-24">Profile Edit Page</h1>
      <div
        className={`flex justify-center ${
          babyId > 0 ? 'gap-6 mx-auto ' : null
        }`}
      >
        <ProfileEditCard
          name={name}
          gender={gender}
          birthDate={birthDate}
          avatar={avatar}
        />
        {babyId > 0 && (
          <BabyProfileEditCard
            babyName={babyName}
            babyId={babyId}
            babyFace={babyFace}
            expectDate={expectDate}
            babyGender={babyGender}
          />
        )}
      </div>
      <button className="mt-10" onClick={goToHome}>
        홈으로 돌아가기
      </button>
    </div>
  )
}
