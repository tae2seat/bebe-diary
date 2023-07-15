import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { authApi } from '../axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getBabyProfile } from '../redux/slices/babyProfileSlice'
import LogButton from './buttons/LogButton'

export default function Navbar() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { avatar } = useSelector((state) => state.profile)
  const { babyName, isLoading, isError } = useSelector(
    (state) => state.babyProfile,
  )
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getBabyProfile())
    }
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

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error occurred!</div>
  }

  ;<div className="px-20 py-2 rounded-full bg-[#1e1e1e]/5 ">
    <p className="text-xl font-medium text-[#231f20] truncate">
      Welcome to Bebe Diary! Login Please!
    </p>
  </div>

  return (
    <header className="flex justify-between items-center shadow-md p-2 gap-2 ">
      <Link to="/" className="shrink-0 mt-1">
        <h2 className="text-[#df6452] text-4xl">Bebe Diary</h2>
      </Link>
      {isLoggedIn ? (
        <nav className="flex justify-end gap-4 py-4">
          <Link to="/new">
            <span className="underline">New Diary</span>
          </Link>
          <Link to="/diaries">
            <span className="underline">Diray List</span>
          </Link>
          <Link to={`/profile/${id}/edit`}>
            <span className="underline">Profile Edit</span>
          </Link>
          <Link to={`/baby/${id}/register`}>
            <span className="underline">Baby Profile register</span>
          </Link>
        </nav>
      ) : (
        <div className="px-20 py-2 rounded-full bg-[#1e1e1e]/5 my-2 ">
          <p className="text-xl font-medium text-[#231f20] truncate">
            Welcome to Bebe Diary! Login Please!
          </p>
        </div>
      )}
      {isLoggedIn ? (
        <div className="flex items-center px-6 gap-6">
          <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center object-cover">
            <img
              src={avatar}
              alt="profile"
              className="w-full h-full object-contain "
            />
          </div>
          <LogButton text="로그아웃" onClick={handleLogout} />
        </div>
      ) : (
        <div className="flex items-center px-6">
          <a
            className="underline cursor-pointer text-gray-400 "
            href="https://www.mybebe.net/"
          >
            Bebe 본사 홈페이지 바로가기
          </a>
        </div>
      )}
    </header>
  )
}
