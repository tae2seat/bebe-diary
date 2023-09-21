import React from 'react'

export default function DailyDetailCard({ diary }) {
  return (
    <div className="flex flex-col p-4 w-1/3 bg-red-50 rounded-xl border-2 border-red-200 ">
      <h1 className="text-2xl text-center text-gray-500">daily diary</h1>
      <div className="my-2">
        <span className="mr-2">제목 :</span>
        <span className="bg-red-50 w-2/3">{diary?.title}</span>
      </div>
      <div className="mb-3">
        <span className="mr-2">오늘의 날짜는?</span>
        <span className="bg-red-50 w-2/3 text-gray-400">
          {diary?.createdAt.split(' ')[0]}
        </span>
      </div>
      <div className="bg-red-50 h-52 p-2">{diary?.content}</div>
    </div>
  )
}
