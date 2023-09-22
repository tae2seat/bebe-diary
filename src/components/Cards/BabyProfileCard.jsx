import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBabyProfile } from '../../redux/slices/babyProfileSlice'
import NotFound from '../../pages/NotFound'
import basic from '../../images/ICON_11.png'
import Lottie from 'lottie-react'
import babyFoot from '../../lottie/baby foot.json'
import { Link } from 'react-router-dom'

export default function BabyProfileCard() {
  const dispatch = useDispatch()

  const { userId } = useSelector((state) => state.profile)
  const {
    babyName,
    babyBirthDate,
    babyGender,
    expectDate,
    babyFace,
    isLoading,
    isError,
  } = useSelector((state) => state.babyProfile)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getBabyProfile())
    }
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-col w-full h-96 justify-center items-center">
        <Link to={`/baby/${userId}/register`}>아이 등록하기</Link>
        <p className="py-2 animate-pulse mb-8">아이를 등록해주세요~</p>
        <Lottie animationData={babyFoot} className="w-32 h-32 mt-4" />
      </div>
    )
  }

  if (isError) {
    return <NotFound />
  }

  return (
    <div className="flex flex-col items-center gap-5 my-12 ">
      <h1>baby profile</h1>
      {babyFace ? (
        <img className="w-36 h-36" src={babyFace} alt="face" />
      ) : (
        <img className="w-36 h-36" src={basic} alt="face" />
      )}
      <div className="text-white mt-8 flex flex-col gap-1">
        <p>이름 :{babyName}</p>
        <p>성별 :{babyGender}</p>
        <p>생일 :{new Date(babyBirthDate).toLocaleDateString()}</p>
        <p>출생일 :{expectDate}</p>
      </div>
    </div>
  )
}
