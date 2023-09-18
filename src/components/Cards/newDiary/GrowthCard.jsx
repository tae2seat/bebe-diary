import React from 'react'

export default function GrowthCard({ setWeight, setHeight }) {
  const handleWeightChange = (e) => {
    setWeight(e.target.value)
  }

  const handleHeightChange = (e) => {
    setHeight(e.target.value)
  }

  return (
    <div>
      <h1>growth</h1>
      <div>
        <div>
          <span>몸무게</span> :
          <input type="text" name="weight" onChange={handleWeightChange} />
          <span className="text-gray-500">Kg</span>
        </div>
        <div>
          <span>키</span> :
          <input type="text" name="height" onChange={handleHeightChange} />
          <span>cm</span>
        </div>
      </div>
    </div>
  )
}
