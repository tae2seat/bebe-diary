import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/slices/profileSlice'
import axios from 'axios';

export default function ProfileEditCard() {

    const dispatch = useDispatch()

    const { name, gender, birthDate, avatar } = useSelector((state) => state.profile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
        if(isLoggedIn) {
            dispatch(getProfile())
        }
    },[])

    const [newName, setNewName] = useState(name)
    const [newGender, setNewGender] = useState(gender)
    const [newBirthDate, setNewBirthDate] = useState(birthDate)
    const [newAvatar, setNewAvatar] = useState(avatar)

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
        e.preventDefault();
        if(newAvatar) {
            const formData = new FormData()

            formData.append('file', newAvatar)

            try {
                const response = axios.put('https://api.mybebe.net/api/v1/profile/avatar', formData ,{
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
    
    const onSubmitUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('https://api.mybebe.net/api/v1/profile/edit',{
               name : newName,
               gender : newGender,
               birthDate : newBirthDate
            });
            console.log("성공!!")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmitAvatar}>
                <input type='file' onChange={handleChangeAvatar} />
                <button>사진 올리기</button>
            </form>
            <form onSubmit={onSubmitUser}>
                <div>
                    <div>
                        <label>이름 :</label>
                        <input type='text' defaultValue={name} onChange={handleChangeName} />
                    </div>
                    <div>
                        <label>gender :</label>
                        <input type='text' defaultValue={gender} onChange={handleChangeGender} />
                    </div>
                    <div>
                        <label>생년월일 :</label>
                        <input type='date' defaultValue={birthDate} onChange={handleChangeBirthDate} />
                    </div>
                </div>     
            </form>
        </div>
    );
}

