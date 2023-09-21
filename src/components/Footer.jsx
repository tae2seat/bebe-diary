import React from 'react'
import Lottie from 'lottie-react'
import babyCar from '../lottie/baby car.json'

export default function Footer() {
  return (
    <div className="bg-red-50 w-full h-12 fixed bottom-0 z-20">
      <Lottie
        animationData={babyCar}
        className="absolute bottom-4 right-16 w-36 h-36"
      />
    </div>
  )
}
