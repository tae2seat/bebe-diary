import React from 'react'
import Lottie from 'lottie-react'
import babyCar from '../lottie/baby car.json'
import babyLie from '../lottie/baby lie.json'

export default function Footer() {
  return (
    <div className="w-full">
      <div className="relative">
        <Lottie
          animationData={babyLie}
          className=" absolute -bottom-24 left-48 w-72 h-64"
        />
        <Lottie
          animationData={babyCar}
          className=" absolute -bottom-12 right-80 w-64 h-64"
        />
      </div>
      <div className="flex justify-center items-end gap-4 pt-16 pb-6 bg-[#82a571] text-white">
        <p>고객센터</p>
        <p>사업 제휴</p>
        <p>광고 문의</p>
        <p>베베(주)</p>
        <p>사업자 등록번호: 123-45-678900</p>
        <p>대표이사: 김 혜 영 </p>
      </div>
    </div>
  )
}
