import React from 'react'
import Lottie from 'lottie-react'
import babyCart from '../lottie/baby car.json'

export default function Footer() {
  return (
    <div className="relative bg-[#5d8964]">
      <Lottie
        className="absolute w-72 h-72 z-10 -bottom-14 right-60"
        animationData={babyCart}
      />
      <div className="absolute w-full h-40 bg-[#5d8964]">
        <div className="flex justify-center gap-4 mt-32  text-white">
          <p>고객센터</p>
          <p>사업 제휴</p>
          <p>광고 문의</p>
          <p>베베(주)</p>
          <p>사업자 등록번호: 123-45-678900</p>
          <p>대표이사: 김 혜 영 </p>
        </div>
      </div>
    </div>
  )
}
