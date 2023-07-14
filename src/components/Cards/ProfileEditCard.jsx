import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getProfile } from '../../redux/slices/profileSlice'

export default function ProfileEditCard() {
  const dispatch = useDispatch()

  const { name, gender, birthDate, avatar } = useSelector(
    (state) => state.profile,
  )
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile())
    }
  }, [])

  const [newName, setNewName] = useState(name)
  const [newGender, setNewGender] = useState(gender)
  const [newBirthDate, setNewBirthDate] = useState(birthDate)
  const [newAvatar, setNewAvatar] = useState(null)

  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }

  const handleChangeGender = (e) => {
    setNewGender(e.target.value)
  }

  const handleChangeBirthDate = (e) => {
    setNewBirthDate(e.target.value)
  }

  const handleChangeAvatar = (e) => {
    setNewAvatar(e.target.files[0])
  }

  const handleSubmitAvatar = (e) => {
    e.preventDefault()
    if (newAvatar) {
      const formData = new FormData()

      formData.append('file', newAvatar)

      try {
        const response = axios.put(
          'https://api.mybebe.net/api/v1/profile/avatar',
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        )
      } catch (error) {
        console.log(error)
      }
    }
  }

  const onSubmitUser = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(
        'https://api.mybebe.net/api/v1/profile/edit',
        {
          name: newName,
          gender: newGender,
          birthDate: newBirthDate,
        },
      )
      console.log('성공!!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="rounded-2xl bg-blue-50 pt-10 pb-6">
      <h1 className="text-blue-300">mommy</h1>
      <form
        className="flex flex-col items-center py-4"
        onSubmit={handleSubmitAvatar}
      >
        {newAvatar ? (
          <img
            className="w-40 mx-auto my-2"
            src={URL.createObjectURL(newAvatar)}
            alt="newAvatar"
          />
        ) : (
          <img className="w-40 mx-auto my-2" src={avatar} alt="avatar" />
        )}
        <input
          className=" bg-blue-100 mt-10 w-2/3 p-1"
          type="file"
          accept="image/*"
          onChange={handleChangeAvatar}
        />
        <button className="mt-4 mb-2">사진 올리기</button>
      </form>
      <form
        className="flex flex-col items-start gap-3  py-4"
        onSubmit={onSubmitUser}
      >
        <div className="flex items-center ml-16">
          <span className="text-gray-500">이 름 : </span>
          <input
            className="bg-blue-50 text-blue-300 border-none pl-2 "
            type="text"
            defaultValue={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="ml-16">
          <span className="text-gray-500">gender : </span>
          <input
            className="bg-blue-50  text-blue-300 border-none pl-2  "
            type="text"
            defaultValue={gender}
            onChange={handleChangeGender}
          />
        </div>
        <div className="ml-16">
          <span className="text-gray-500">생 년 월 일 : </span>
          <input
            className="bg-blue-50 text-blue-300 border-none pl-2  "
            type="date"
            defaultValue={birthDate}
            onChange={handleChangeBirthDate}
          />
        </div>
        <button className="mt-4">수정하기</button>
      </form>
    </div>
  )
}
