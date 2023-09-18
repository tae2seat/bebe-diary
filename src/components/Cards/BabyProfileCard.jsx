import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBabyProfile } from '../../redux/slices/babyProfileSlice'
import NotFound from '../../pages/NotFound'
import basic from '../../images/ICON_11.png'

export default function BabyProfileCard() {
  const dispatch = useDispatch()

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
    return <h1>Loading..</h1>
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
