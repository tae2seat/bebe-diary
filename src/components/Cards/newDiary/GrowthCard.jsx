import React from 'react'

export default function GrowthCard({ setWeight, setHeight }) {
  const handleWeightChange = (e) => {
    setWeight(e.target.value)
  }

  const handleHeightChange = (e) => {
    setHeight(e.target.value)
  }

  return (
    <div className=" bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
      <h1 className="text-2xl text-center text-gray-500 mb-2">growth</h1>
      <div className="flex justify-between w-full">
        <span>몸무게</span> :
        <input
          type="text"
          name="weight"
          onChange={handleWeightChange}
          className="w-1/2 bg-gray-50"
        />
        <span>Kg</span>
      </div>
      <div className="flex justify-between w-full">
        <span className="mx-4">키</span> :
        <input
          type="text"
          name="height"
          onChange={handleHeightChange}
          className="w-1/2 bg-gray-50"
        />
        <span>cm</span>
      </div>
    </div>
  )
}
