import React from 'react'

export default function DailyCard({ setTitle, setDate, setContent }) {
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
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
          type="text"
          onChange={handleTitleChange}
          className="bg-red-50 w-2/3"
        />
      </div>
      <div className="mb-3">
        <span className="mr-2">오늘의 날짜는?</span>
        <input
          type="date"
          onChange={handleDateChange}
          className="bg-red-50 w-2/3 text-gray-400"
        />
      </div>
      <textarea
        className="bg-red-50 h-52 p-2"
        // className="w-5/6 resize-none p-2 rounded-lg border bg-red-100 border-red-50 hover:border-white outline-none mt-6  text-gray-600"
        rows={10}
        type="text"
        onChange={handleContentChange}
      />
    </div>
  )
}
