import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function GotoButton({ link, buttonText }) {
  const navigate = useNavigate()

  const handleClickGotoButton = () => {
    navigate(link)
  }

  return (
    <button className="my-10" onClick={handleClickGotoButton}>
      {buttonText}
    </button>
  )
}
