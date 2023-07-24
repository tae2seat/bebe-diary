import React, { useEffect, useState } from 'react'
import axios from 'axios'
import basic from '../../images/ICON_16.png'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function ProfileEditCard({ name, gender, birthDate, avatar }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    setValue('name', name)
    setValue('gender', gender)
    setValue('birthDate', birthDate)
  }, [setValue, name, gender, birthDate])

  const [newAvatar, setNewAvatar] = useState(null)

  const handleAvatarChange = (e) => {
    setNewAvatar(e.target.files[0])
  }

  const onSubmitAvatar = async (data, e) => {
    e.preventDefault()
    if (newAvatar) {
      const formData = new FormData()

      formData.append('file', newAvatar)

      try {
        const response = await axios.put(
          'https://api.mybebe.net/api/v1/profile/avatar',
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        alert('사진 업로드 성공!')
      } catch (error) {
        console.log(error)
      }
    }
  }

  const onSubmitUser = async (data) => {
    try {
      const response = await axios.put(
        'https://api.mybebe.net/api/v1/profile/edit',
        {
          ...data,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
      if (response.status === 200) {
        alert('수정이 완료되었습니다.')
        navigate('/')
      }
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
            src={avatar ? avatar : basic}
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
        className="flex flex-col items-start gap-8  py-2"
        onSubmit={handleSubmit(onSubmitUser)}
      >
        <div className="ml-16">
          <span className="text-gray-500">이 름 : </span>
          <input
            className="bg-blue-50 text-blue-300 border-none pl-2"
            {...register('name', {
              required: '이름은 필수 입력 사항입니다.',
            })}
            type="text"
            defaultValue={name}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="flex ml-16 items-center">
          <p className="text-gray-500 text-xl">gender:</p>
          <select
            className="bg-blue-50 text-blue-300 border-none pl-2 "
            {...register('gender', {
              required: '성별은 필수 입력 사항입니다.',
            })}
            defaultValue={gender}
          >
            <option value="">Select gender</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>
        <div className="ml-16">
          <span className="text-gray-500">생 년 월 일 : </span>
          <input
            className="bg-blue-50 text-blue-300 border-none pl-2  "
            {...register('birthDate', {
              required: '생년원일은 필수 입력 사항입니다.',
            })}
            type="date"
            defaultValue={birthDate}
          />
        </div>
        {errors.birthDate && <p>{errors.birthDate.message}</p>}
        <button className="mt-2">수정하기</button>
      </form>
    </div>
  )
}
