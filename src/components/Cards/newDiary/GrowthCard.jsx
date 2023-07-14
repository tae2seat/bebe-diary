import React from 'react'

export default function GrowthCard({ setWeight, setHeight }) {
  const handleWeightChange = (e) => {
    setWeight(e.target.value)
  }

  const handleHeightChange = (e) => {
    setHeight(e.target.value)
  }

  return (
    <div className="bg-[#cfe2ff] rounded-2xl p-2">
      <h1 className="mb-2 text-[#83adec] underline">growth</h1>
      <div className="flex flex-col gap-1 my-2">
        <div className="flex justify-center">
          <span className="text-gray-500 mx-2">몸무게</span> :
          <input
            className="mx-1 bg-[#cfe2ff]"
            type="text"
            name="weight"
            placeholder="ex)23.00"
            onChange={handleWeightChange}
          />
          <span className="text-gray-500">Kg</span>
        </div>
        <div className="flex justify-center">
          <span className="text-gray-500 mx-6">키</span> :
          <input
            className="mx-1 bg-[#cfe2ff] "
            type="text"
            name="height"
            onChange={handleHeightChange}
          />
          <span className="text-gray-500">cm</span>
        </div>
      </div>
    </div>
  )
}
