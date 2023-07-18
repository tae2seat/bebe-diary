import React from 'react'

export default function GrowthDetailCard({ diary }) {
  return (
    <div className="bg-[#cfe2ff] rounded-2xl p-2">
      <h1 className="mb-2 text-[#83adec] underline">growth</h1>
      <div className="flex flex-col gap-1 my-2">
        <div className="flex justify-center">
          <span className="text-gray-500 mx-2">몸무게</span> :
          <span className="w-1/6 pl-3 mx-1 bg-[#cfe2ff]">{diary?.weight}</span>
          <span className="text-gray-500">Kg</span>
        </div>
        <div className="flex justify-center">
          <span className="text-gray-500 mx-6">키</span> :
          <span className="w-1/6 pl-3 mx-1 bg-[#cfe2ff]">{diary?.height}</span>
          <span className="text-gray-500">cm</span>
        </div>
      </div>
    </div>
  )
}
