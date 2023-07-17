import React from 'react'
import Lottie from 'lottie-react'
import babyCar from '../lottie/baby car.json'

export default function Footer() {
  return (
    <div className="w-full">
      <div className="relative">
        <Lottie
          animationData={babyCar}
          className=" absolute -bottom-12 right-80 w-64 h-64"
        />
      </div>
      <div className="flex justify-center items-end gap-4 pt-16 pb-6 bg-[#87ba74] text-white">
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
