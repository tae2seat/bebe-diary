import React from 'react'
import { useSelector } from 'react-redux'
import LoggedHome from '../components/LoggedHome'
import LogoutHome from '../components/LogoutHome'

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <div className="my-20">{isLoggedIn ? <LoggedHome /> : <LogoutHome />}</div>
  )
}
