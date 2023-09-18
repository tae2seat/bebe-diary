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
    <div>
      {showImage && <img src={baby} alt="baby" className="w-20 " />}
      <h1>Photo</h1>
      <form>
        <img src={diary} alt="diary" />
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
