import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function GotoButton({ link, buttonText }) {
  const navigate = useNavigate()

  const handleClickGotoButton = () => {
    navigate(link)
  }

  return <button onClick={handleClickGotoButton}>{buttonText}</button>
}
