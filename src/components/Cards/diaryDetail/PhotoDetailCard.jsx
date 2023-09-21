import React, { useEffect, useState } from 'react'

export default function PhotoDetailCard() {
  return (
    <div className=" bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
      <h1 className="text-2xl text-center text-gray-500">Photo</h1>
      <form className="flex flex-col items-center ">
        <img className="w-28 h-28 object-contain border-gray-50 border-2 mt-2 mb-4 p-2" />
        {/* {image ? <img /> : <img />} */}
        <p>사진추가 서비스 준비중..</p>
      </form>
    </div>
  )
}
