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
    <div>
      <h1 className="mt-16 mb-4">Profile</h1>
      <div className="profile">
        {avatar ? (
          <img className="profile-image" src={avatar} alt="profileImage" />
        ) : (
          <img className="profile-image" src={basic} alt="profileImage" />
        )}
        <div className="profile-info">
          <p>이름 :{name}</p>
          <p>이메일 :{email}</p>
          <p>성별 :{gender}</p>
          <p>생일 :{birthDate}</p>
        </div>
      </div>
    </div>
  )
}
