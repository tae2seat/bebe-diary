import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { authApi } from '../axios'
import { Link, useNavigate } from 'react-router-dom'
import { getProfile } from '../redux/slices/profileSlice'
import { getBabyProfile } from '../redux/slices/babyProfileSlice'
import LogButton from './buttons/LogButton'
import Loading from '../pages/Loading'
import NotFound from '../pages/NotFound'
import basic from '../images/ICON_16.png'
import navbar from '../images/nav.png'

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const { avatar, userId } = useSelector((state) => state.profile)

  const [nav, setNav] = useState(false)

  const mouseClick = () => {
    setNav(!nav)
  }

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  const handleLogout = async () => {
    try {
      const response = await authApi.post('/logout', null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      dispatch(logout())
      localStorage.clear()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <header className="flex flex-col py-1 z-20">
      <div className="relative flex justify-between items-center px-4 py-2 border-b-2 shadow-lg">
        <Link to="/" className="text-2xl text-[#df6452]">
          Bebe diary
        </Link>
        {isLoggedIn && (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 p-1 rounded-full border border-gray-500">
              {avatar ? (
                <img src={avatar} alt="profile" />
              ) : (
                <img src={basic} alt="profile" />
              )}
            </div>
            {isLoggedIn ? (
              <button onClick={handleLogout}>로그아웃</button>
            ) : (
              <Link>로그인</Link>
            )}
            <img
              src={navbar}
              alt="navbar"
              onClick={mouseClick}
              className="w-10 h-10 cursor-pointer"
            />
          </div>
        )}
        {nav === true ? (
          <div className="absolute w-full md:w-[200px] md:h-[180px] opacity-70 top-14 right-0 flex flex-col items-center gap-2 md:gap-4 py-4 cursor-pointer bg-red-100 z-20">
            <Link to="/new">New Diary</Link>
            <Link to="/diaries">Diary List</Link>
            <Link>Profile</Link>
            <Link to={`/baby/${userId}/register`}>Baby Register</Link>
          </div>
        ) : null}
      </div>
    </header>
  )
}
