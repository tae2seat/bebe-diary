import React from 'react'
import Lottie from 'lottie-react'
import babyCry from '../lottie/baby cry.json'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center w-full h-screen mx-auto py-10 bg-red-50">
      <Lottie className="w-96 h-96" animationData={babyCry} />
      <h1 className="text-gray-500 mb-10">페이지를 찾을 수 없습니다.</h1>
      <p className="text-lg mt-4">Home 버튼을 눌러주세요~!!</p>
      <Link to="/" className="mt-6  ">
        <span className="text-xl font-bold rounded-lg bg-red-200 text-white border-2 border-red-400  hover:text-red-200 hover:bg-white py-1 px-2">
          Home
        </span>
      </Link>
    </div>
  )
}
