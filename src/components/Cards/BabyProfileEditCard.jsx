import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBabyProfile } from '../../redux/slices/babyProfileSlice'
import { loggedApi } from '../../axios';
import axios from 'axios';


export default function BabyProfileEditCard() {

    const dispatch = useDispatch()

    const { babyName, id, babyFace } = useSelector((state) => state.babyProfile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
        if(isLoggedIn) {
            dispatch(getBabyProfile())
        }
    },[])

    const [babyNewName, setBabyNewName] = useState(babyName)
    const [babyNewFace, setBabyNewFace] = useState(babyFace)

    const handleChangeBabyName = (e) => {
        setBabyNewName(e.target.value)
    }

    const handleChangeBabyFace = (e) => {
        setBabyNewFace(e.target.files[0])
    }

    const handleSubmitBabyFace = (e) => {
        e.preventDefault()
        if(babyNewFace) {
            const formData = new FormData()

            formData.append('file' , babyNewFace)

            try {
                const response = axios.patch(`https://api.mybebe.net/api/v1/diary/baby/${id}/face`, formData ,{
                    headers : {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        "Content-Type": 'multipart/form-data'
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    const onSubmitBaby = async (e) => {
        e.preventDefault();
        try {
            const response = await loggedApi.put(`/baby/${id}`,{
                name: babyNewName
            },{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmitBabyFace}>
                <input type='file' onChange={handleChangeBabyFace} />
                <button>사진 올리기</button>
            </form>
            <form onSubmit={onSubmitBaby}>
                <div>
                    <label>이름 :</label>
                    <input type='text' defaultValue={babyName} onChange={handleChangeBabyName} />
                </div>
            </form>
        </div>
    );
}

