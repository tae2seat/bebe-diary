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
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col rounded-2xl bg-blue-50 pt-6 pb-2">
      <h1 className="text-blue-300 mb-2">mommy</h1>
      <div className="flex ">
        <form
          className="flex flex-col items-center w-1/2"
          onSubmit={handleSubmit(onSubmitAvatar)}
        >
          {newAvatar ? (
            <img
              className="w-28 h-28 object-contain  border-gray-50 border-2 mb-4 p-2"
              src={URL.createObjectURL(newAvatar)}
              alt="newAvatar"
            />
          ) : (
            <img
              className="w-32 h-28 object-contain border-gray-50 border-2 mb-4 p-2"
              src={avatar ? avatar : basic}
              alt="avatar"
            />
          )}
          <input
            className=" bg-blue-100 w-2/3 h-10 p-1"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
          <button className="my-4">사진 올리기</button>
        </form>

        <form
          className="flex flex-col mt-10 w-1/2 gap-4"
          onSubmit={handleSubmit(onSubmitUser)}
        >
          <div className="flex justify-start">
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
          <div className="flex justify-start">
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
          <div className="">
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
          <button className="mt-4">수정하기</button>
        </form>
      </div>
    </div>
  )
}
