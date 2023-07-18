import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { authApi } from '../axios'
import { Link, useNavigate } from 'react-router-dom'
import { getBabyProfile } from '../redux/slices/babyProfileSlice'
import LogButton from './buttons/LogButton'
import Loading from '../pages/Loading'
import NotFound from '../pages/NotFound'

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { avatar, userId } = useSelector((state) => state.profile)
  const { isLoading, isError } = useSelector((state) => state.babyProfile)
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
    return <Loading />
  }

  if (isError) {
    return <NotFound />
  }

  return (
    <header className="flex justify-between items-center shadow-md py-2 px-4 gap-2  ">
      <Link to="/" className="shrink-0 mt-1 w-1/4 ">
        <h2 className="text-[#df6452] text-4xl">Bebe Diary</h2>
      </Link>
      {isLoggedIn ? (
        <nav className="flex justify-center w-1/2 gap-4 py-4">
          <Link to="/new">
            <span className="underline">New Diary</span>
          </Link>
          <Link to="/diaries">
            <span className="underline">Diray List</span>
          </Link>
          <Link to={`/profile/${userId}/edit`}>
            <span className="underline">Profile Edit</span>
          </Link>
          <Link to={`/baby/${userId}/register`}>
            <span className="underline">Baby register</span>
          </Link>
        </nav>
      ) : (
        <div className="px-20 py-2 rounded-full bg-[#1e1e1e]/5 my-2 w-1/2 ">
          <p className="text-xl font-medium text-[#231f20] truncate">
            Welcome to Bebe Diary! Login Please!
          </p>
        </div>
      )}
      {isLoggedIn ? (
        <div className="flex w-1/4 pl-32 gap-8 ">
          <div className="flex justify-center items-center w-16 h-16 rounded-full bg-slate-50  object-contain">
            <img src={avatar} alt="profile" className="w-12 h-12" />
            {/* 프로필 이미지가 있으면 나타나고 없으면 기본이미지로 설정하기  */}
          </div>
          <LogButton text="로그아웃" onClick={handleLogout} />
        </div>
      ) : (
        <div className="flex justify-end w-1/4 ">
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
