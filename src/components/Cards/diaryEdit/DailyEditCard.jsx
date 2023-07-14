import React from 'react'

export default function DailyCard({ diary, setTitle, setContent }) {
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <>
      <h1 className="my-2 text-[#feb4b8] underline">daily diary</h1>
      <div className="ml-16 my-2">
        <span className="text-xl text-gray-500">제목 :</span>
        <input
          className="w-3/4 p-1 ml-2 bg-[#fedcdd] text-gray-400 "
          type="text"
          defaultValue={diary?.title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="ml-16 ">
        <span className="text-gray-500">다이어리 쓴 날은?</span>
        <span className='className="w-1/4 p-1 ml-2 bg-[#fedcdd] text-gray-400"'>
          {diary.createdAt}
        </span>
      </div>
      <div className="flex justify-center items-center">
        <textarea
          className="w-5/6 resize-none p-2 rounded-lg border bg-red-100 border-red-50 hover:border-white outline-none mt-6"
          rows={10}
          type="text"
          defaultValue={diary?.content}
          onChange={handleContentChange}
        />
      </div>
    </>
  )
}
