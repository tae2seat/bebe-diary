import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBabyProfile } from '../../redux/slices/babyProfileSlice'
import Loading from '../../pages/Loading'
import NotFound from '../../pages/NotFound'

export default function BabyProfileCard() {
  const dispatch = useDispatch()

  const {
    babyName,
    babyBirthDate,
    babyGender,
    expectDate,
    babyFace,
    pregnantDate,
    isLoading,
    isError,
  } = useSelector((state) => state.babyProfile)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getBabyProfile())
    }
  }, [isLoggedIn])

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <NotFound />
  }

  return (
    <div>
      <h1 className="mt-16 mb-4">baby profile</h1>
      <div className="profile">
        <img className="profile-image" src={babyFace} alt="face" />
        <div className="profile-info">
          <p>이름 :{babyName}</p>
          <p>성별 :{babyGender}</p>
          <p>생일 :{new Date(babyBirthDate).toLocaleDateString()}</p>
          <p>출생일 :{expectDate}</p>
        </div>
      </div>
    </div>
  )
}
