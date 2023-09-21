import React from 'react'

export default function GrowthDetailCard({ diary }) {
  return (
    <div className=" bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
      <h1 className="text-2xl text-center text-gray-500 mb-2">growth</h1>
      <div className="flex justify-between w-full">
        <span>몸무게</span> :
        <span className="w-1/2 bg-gray-50">{diary?.weight}</span>
        <span>Kg</span>
      </div>
      <div className="flex justify-between w-full">
        <span className="mx-4">키</span> :
        <span className="w-1/2 bg-gray-50">{diary?.height}</span>
        <span>cm</span>
      </div>
    </div>
  )
}
