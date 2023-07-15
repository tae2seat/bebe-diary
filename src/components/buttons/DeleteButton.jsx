import React from 'react'

export default function DeleteButton({ onClick }) {
  return (
    <button onClick={onClick} className="my-10">
      다이어리 삭제하기
    </button>
  )
}
