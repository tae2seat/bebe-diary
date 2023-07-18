import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBabyProfile } from '../../redux/slices/babyProfileSlice'
import { loggedApi } from '../../axios'
import axios from 'axios'

export default function BabyProfileEditCard() {
  const dispatch = useDispatch()

  const { babyName, babyId, babyFace } = useSelector(
    (state) => state.babyProfile,
  )

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getBabyProfile())
    }
  }, [])

  const [babyNewName, setBabyNewName] = useState(babyName)
  const [babyNewFace, setBabyNewFace] = useState(null)

  const handleChangeBabyName = (e) => {
    setBabyNewName(e.target.value)
  }

  const handleChangeBabyFace = (e) => {
    setBabyNewFace(e.target.files[0])
  }

  const handleSubmitBabyFace = (e) => {
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
      } catch (error) {
        console.log(error)
      }
    }
  }

  const onSubmitBaby = async (e) => {
    e.preventDefault()
    try {
      const response = await loggedApi.put(
        `/baby/${babyId}`,
        {
          name: babyNewName,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="rounded-2xl bg-yellow-50  py-6 ">
      <h1 className="text-orange-300">baby</h1>
      <form
        className="flex flex-col items-center py-2"
        onSubmit={handleSubmitBabyFace}
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
            src={babyFace}
            alt="babyFace"
          />
        )}
        <input
          className="bg-orange-200 mt-8 w-2/3 p-1"
          type="file"
          accept="image/*"
          onChange={handleChangeBabyFace}
        />
        <button className="mt-3 mb-2">사진 올리기</button>
      </form>
      <form
        className="flex flex-col items-start gap-3  py-2"
        onSubmit={onSubmitBaby}
      >
        <div className="ml-16">
          <span className="text-gray-500">태명 (이름) : </span>
          <input
            className="bg-yellow-50 text-orange-300 border-none pl-2 "
            type="text"
            defaultValue={babyName}
            onChange={handleChangeBabyName}
          />
        </div>
        <button className="mt-20">수정하기</button>
      </form>
    </div>
  )
}
