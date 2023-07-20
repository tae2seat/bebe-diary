import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getProfile } from '../../redux/slices/profileSlice'
import { useForm } from 'react-hook-form'

export default function ProfileEditCard() {
  const dispatch = useDispatch()

  const { name, gender, birthDate, avatar } = useSelector(
    (state) => state.profile,
  )
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile())
    }
  }, [])

  const [newName, setNewName] = useState(name)
  const [newGender, setNewGender] = useState(gender)
  const [newBirthDate, setNewBirthDate] = useState(birthDate)
  const [newAvatar, setNewAvatar] = useState(null)

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleGenderChange = (e) => {
    setNewGender(e.target.value)
  }

  const handleBirthDateChange = (e) => {
    setNewBirthDate(e.target.value)
  }

  const handleAvatarChange = (e) => {
    setNewAvatar(e.target.files[0])
  }

  const onSubmitAvatar = (e) => {
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
    <div className="rounded-2xl bg-blue-50 py-6">
      <h1 className="text-blue-300">mommy</h1>
      <form
        className="flex flex-col items-center py-2"
        onSubmit={handleSubmit(onSubmitAvatar)}
      >
        {newAvatar ? (
          <img
            className="w-36 h-36 my-2 object-contain"
            src={URL.createObjectURL(newAvatar)}
            alt="newAvatar"
          />
        ) : (
          <img
            className="w-36 h-36 my-2 object-contain"
            src={avatar}
            alt="avatar"
          />
        )}
        <input
          className=" bg-blue-100 mt-8 w-2/3 p-1"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
        />
        <button className="mt-3 mb-2">사진 올리기</button>
      </form>
      <form
        className="flex flex-col items-start gap-2 py-2"
        onSubmit={handleSubmit(onSubmitUser)}
      >
        <div className="ml-16">
          <span className="text-gray-500">이 름 : </span>
          <input
            className="bg-blue-50 text-blue-300 border-none pl-2"
            {...register('username', {
              required: '사용자 이름은 필수 입력 사항입니다.',
            })}
            type="text"
            defaultValue={name}
            onChange={handleNameChange}
          />
          {errors.username && (
            <p className="text-xs text-gray-500">{errors.username.message}</p>
          )}
        </div>
        <div className="flex ml-16 items-center">
          <p className="text-gray-500 text-xl">gender:</p>
          <select
            className="bg-blue-50 text-blue-300 border-none pl-2 "
            {...register('gender', {
              required: '성별은 필수 선택 사항입니다.',
            })}
            defaultValue={gender}
            onChange={handleGenderChange}
          >
            <option value="">Select gender</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
          {errors.gender && (
            <p className="text-xs text-gray-600">{errors.gender.message}</p>
          )}
        </div>
        <div className="ml-16">
          <span className="text-gray-500">생 년 월 일 : </span>
          <input
            className="bg-blue-50 text-blue-300 border-none pl-2  "
            {...register('birth', {
              required: '생년월일은 필수 입력 사항입니다.',
            })}
            type="date"
            defaultValue={birthDate}
            onChange={handleBirthDateChange}
          />
          {errors.birthDate && (
            <p className="text-xs text-gray-600">{errors.birthDate.message}</p>
          )}
        </div>
        <button className="mt-2">수정하기</button>
      </form>
    </div>
  )
}
