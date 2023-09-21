import React from 'react'

export default function GrowthEditCard({ diary, setWeight, setHeight }) {
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
          className="w-1/2 bg-gray-50"
          type="text"
          name="weight"
          defaultValue={diary?.weight}
          onChange={handleWeightChange}
        />
        <span>Kg</span>
      </div>
      <div className="flex justify-between w-full">
        <span className="mx-4">키</span> :
        <input
          className="w-1/2 bg-gray-50"
          type="text"
          name="height"
          defaultValue={diary?.height}
          onChange={handleHeightChange}
        />
        <span>cm</span>
      </div>
    </div>
  )
}
