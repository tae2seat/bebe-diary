import React, { useEffect, useState } from 'react'
import baby from '../../../images/baby_03.png'
import diary from '../../../images/ICON_06.png'

export default function PhotoCard() {
  const [showImage, setShowImage] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage((prevShowImage) => !prevShowImage)
    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className="relative bg-[#fff0ac] rounded-2xl">
      {showImage && (
        <img
          src={baby}
          alt="baby"
          className="absolute -top-14 right-14 w-24 h-16"
        />
      )}
      <h1 className="my-2 text-[#ffd77f] underline">Photo</h1>
      <form className="flex flex-col justify-center items-center">
        <img className="w-36 h-36 mx-auto mb-2" src={diary} alt="diary" />
        <p className="bg-[#fff0ac] w-2/3 my-4">사진추가 서비스 준비중..</p>
        {/* <input
          className="bg-[#fff0ac] w-2/3 p-1 my-2"
          type="file"
          accept="image/*"
        /> */}
      </form>
    </div>
  )
}
