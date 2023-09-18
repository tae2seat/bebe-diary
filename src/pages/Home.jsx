import React from 'react'
import { useSelector } from 'react-redux'
import LoggedHome from '../components/LoggedHome'
import LogoutHome from '../components/LogoutHome'
import LoginCard from '../components/Cards/LoginCard'

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <div className="">
      {isLoggedIn ? <LoggedHome /> : <LogoutHome />}
      {/* <LoginCard /> */}
    </div>
  )
}
