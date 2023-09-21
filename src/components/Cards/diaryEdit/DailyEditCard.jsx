import React from 'react'

export default function DailyCard({ diary, setTitle, setContent }) {
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <div className="flex flex-col p-4 w-1/3 bg-red-50 rounded-xl border-2 border-red-200 ">
      <h1 className="text-2xl text-center text-gray-500">daily diary</h1>
      <div className="my-2">
        <span className="mr-2">제목 :</span>
        <input
          className="bg-red-50 w-2/3"
          type="text"
          defaultValue={diary?.title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="mb-3">
        <span className="mr-2">다이어리 쓴 날은?</span>
        <span className="bg-red-50 w-2/3 text-gray-400">
          {diary?.createdAt.split(' ')[0]}
        </span>
      </div>
      <textarea
        className="bg-red-50 h-52 p-2"
        rows={10}
        type="text"
        defaultValue={diary?.content}
        onChange={handleContentChange}
      />
    </div>
  )
}
