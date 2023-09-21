import React, { useEffect, useState } from 'react'
import baby from '../../../images/baby_03.png'
import diary from '../../../images/ICON_06.png'

export default function PhotoCard() {
  return (
    <div className=" bg-gray-50 p-4 rounded-xl  border-2 border-gray-200">
      <h1 className="text-2xl text-center text-gray-500">Photo</h1>
      <form className="flex flex-col items-center">
        <img
          src={diary}
          alt="diary"
          className="w-28 h-28 object-contain  border-gray-50 border-2 mt-2 mb-4 p-2"
        />
        <p>사진추가 서비스 준비중..</p>
        {/* <input
          className="bg-[#fff0ac] w-2/3 p-1 my-2"
          type="file"
          accept="image/*"
        /> */}
      </form>
    </div>
  )
}
