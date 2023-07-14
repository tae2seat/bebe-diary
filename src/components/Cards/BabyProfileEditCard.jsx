import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBabyProfile } from '../../redux/slices/babyProfileSlice'
import { loggedApi } from '../../axios'
import axios from 'axios'

export default function BabyProfileEditCard() {
  const dispatch = useDispatch()

  const { babyName, id, babyFace } = useSelector((state) => state.babyProfile)
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
          `https://api.mybebe.net/api/v1/diary/baby/${id}/face`,
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
        `/baby/${id}`,
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
    <div className="rounded-2xl bg-yellow-50 pt-10 pb-6">
      <h1 className="text-orange-300">baby</h1>
      <form
        className="flex flex-col items-center py-4"
        onSubmit={handleSubmitBabyFace}
      >
        {babyNewFace ? (
          <img
            className="w-40 mx-auto my-2 "
            src={URL.createObjectURL(babyNewFace)}
            alt="babyNewFace"
          />
        ) : (
          <img className="w-40 mx-auto my-2" src={babyFace} alt="babyFace" />
        )}
        <input
          className="bg-orange-200 mt-10 w-2/3 p-1"
          type="file"
          accept="image/*"
          onChange={handleChangeBabyFace}
        />
        <button className="mt-4 mb-2">사진 올리기</button>
      </form>
      <form
        className="flex flex-col items-start gap-3  py-4"
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
        <button className="mt-24">수정하기</button>
      </form>
    </div>
  )
}
