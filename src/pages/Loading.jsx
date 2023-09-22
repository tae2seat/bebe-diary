import React from 'react'
import Lottie from 'lottie-react'
import babyFoot from '../lottie/baby foot.json'

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full ">
      <div className="h-96 w-full flex flex-col items-center gap-10">
        <p className="text-xl">Loading중...</p>
        <Lottie animationData={babyFoot} className="w-36 h-36" />
      </div>
    </div>
  )
}
