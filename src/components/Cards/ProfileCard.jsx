import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/slices/profileSlice'
import basic from '../../images/ICON_16.png'

export default function ProfileCard() {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const { name, email, gender, birthDate, avatar } = useSelector(
    (state) => state.profile,
  )

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile())
    }
  }, [])

  return (
    <div className="flex flex-col items-center gap-5 my-12 ">
      <h1>Profile</h1>
      {avatar ? (
        <img className="w-36 h-36" src={avatar} alt="profileImage" />
      ) : (
        <img className="w-36 h-36" src={basic} alt="profileImage" />
      )}
      <div className="flex flex-col gap-1 text-white mt-8">
        <p>이름 :{name}</p>
        <p>이메일 :{email}</p>
        <p>성별 :{gender}</p>
        <p>생일 :{birthDate}</p>
      </div>
    </div>
  )
}
