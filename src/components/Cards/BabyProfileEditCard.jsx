import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBabyProfile } from '../../redux/slices/babyProfileSlice'
import { loggedApi } from '../../axios'
import axios from 'axios'
import basic from '../../images/ICON_11.png'
import { useForm } from 'react-hook-form'

export default function BabyProfileEditCard({ babyName, babyId, babyFace }) {
  console.log(babyName, babyId, babyFace)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  useEffect(() => {
    setValue('name', babyName)
  }, [setValue, babyName])

  const [babyNewFace, setBabyNewFace] = useState(null)

  const handleBabyFaceChange = (e) => {
    setBabyNewFace(e.target.files[0])
  }

  const onSubmitBabyFace = (e) => {
    e.preventDefault()
    if (babyNewFace) {
      const formData = new FormData()

      formData.append('file', babyNewFace)

      try {
        const response = axios.patch(
          `https://api.mybebe.net/api/v1/diary/baby/${babyId}/face`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        console.log('성공!!')
      } catch (error) {
        console.log(error)
      }
    }
  }

  const onSubmitBaby = async (data) => {
    try {
      const response = await loggedApi.put(
        `/baby/${babyId}`,
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
      console.log('성공!!!!!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="rounded-2xl bg-yellow-50 py-6 ">
      <h1 className="text-orange-300">baby</h1>

      <form
        className="flex flex-col items-center py-2"
        onSubmit={handleSubmit(onSubmitBabyFace)}
      >
        {babyNewFace ? (
          <img
            className="w-36 h-36 my-2 object-contain "
            src={URL.createObjectURL(babyNewFace)}
            alt="babyNewFace"
          />
        ) : (
          <img
            className="w-36 h-36 my-2 object-contain"
            src={babyFace ? babyFace : basic}
            alt="babyFace"
          />
        )}
        <input
          className="bg-orange-200 mt-8 w-2/3 p-1"
          type="file"
          accept="image/*"
          onChange={handleBabyFaceChange}
        />
        <button className="mt-3 mb-2">사진 올리기</button>
      </form>

      <form
        className="flex flex-col items-start gap-3  py-2"
        onSubmit={handleSubmit(onSubmitBaby)}
      >
        <div className="ml-16">
          <span className="text-gray-500">태명 (이름) : </span>
          <input
            className="bg-yellow-50 text-orange-300 border-none pl-2 "
            {...register('name', {
              required: '이름은 필수 입력 사항입니다.',
            })}
            type="text"
            defaultValue={babyName}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <button className="mt-20">수정하기</button>
      </form>
    </div>
  )
}
