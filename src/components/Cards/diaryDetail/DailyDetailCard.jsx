import React from 'react'

export default function DailyDetailCard({ diary }) {
  return (
    <>
      <h1 className="my-2 text-[#feb4b8] underline">daily diary</h1>
      <div className=" flex justify-start items-center ml-16 my-2">
        <span className="text-xl text-gray-800">제목 :</span>
        <span className="w-3/4 p-l ml-2bg-[#fedcdd] text-gray-800">
          {diary?.title}
        </span>
      </div>
      <div className="ml-16 ">
        <span className="text-gray-600">오늘의 날짜는?</span>
        <span className="w-1/4 p-1 ml-2 bg-[#fedcdd] text-gray-600">
          {diary?.createdAt.split(' ')[0]}
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-5/6 resize-none p-2 rounded-lg border bg-red-100 border-red-50 hover:border-white outline-none mt-6">
          {diary?.content}
        </div>
      </div>
    </>
  )
}
