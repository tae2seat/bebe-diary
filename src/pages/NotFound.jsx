import React from 'react'
import Lottie from 'lottie-react'
import babyCry from '../lottie/baby cry.json'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Lottie className="relative my-auto" animationData={babyCry} />
      <h1 className="absolute top-48 text-[#c5b9d1]">
        페이지를 찾을 수 없습니다.
      </h1>
      <p className="absolute bottom-16 ">Home 버튼을 눌러주세요~!!</p>
      <Link to="/" className="absolute -bottom-2">
        <span className="text-2xl font-bold underline">Home</span>
      </Link>
    </div>
  )
}
