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
    <div className="flex flex-col">
      <h1 className="text-lg text-center">daily diary</h1>
      <div>
        <span>제목 :</span>
        <input type="text" onChange={handleTitleChange} />
      </div>
      <div>
        <span>오늘의 날짜는?</span>
        <input type="date" onChange={handleDateChange} />
      </div>
      <textarea
        className="bg-red-50"
        // className="w-5/6 resize-none p-2 rounded-lg border bg-red-100 border-red-50 hover:border-white outline-none mt-6  text-gray-600"
        rows={10}
        type="text"
        onChange={handleContentChange}
      />
    </div>
  )
}
