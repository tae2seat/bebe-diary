import React from 'react'
import Lottie from 'lottie-react'
import babyFoot from '../lottie/baby foot.json'

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center py-40">
      <h1 className="py-20 text-[#ffaa7c]">잠시만 기다려주세요오옹!</h1>
      <p className=" text-lg text-[#908d96]">Loading중...</p>
      <Lottie animationData={babyFoot} className="w-96 h-96 mt-10" />
    </div>
  )
}
