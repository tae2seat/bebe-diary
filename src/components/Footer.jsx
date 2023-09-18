import React from 'react'
import Lottie from 'lottie-react'
import babyCar from '../lottie/baby car.json'

export default function Footer() {
  return (
    <div className="bg-[#529b79] w-full h-12 fixed bottom-0 z-20">
      <Lottie
        animationData={babyCar}
        className=" absolute -top-24 right-16 w-32 h-32"
      />
    </div>
  )
}
