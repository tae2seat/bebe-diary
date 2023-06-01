import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/slices/profileSlice';
import { getBabyProfile } from '../../redux/slices/babyProfileSlice';
import { loggedApi } from '../../axios';
import axios from 'axios';

export default function ProfileEdit() {

    const dispatch = useDispatch()
    
    const { name, gender, birthDate } = useSelector((state) => state.profile)
    const { babyName, id } = useSelector((state) => state.babyProfile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
        if(isLoggedIn) {
            dispatch(getProfile())
        dispatch(getBabyProfile())
        }
    },[])

    const [newName, setNewName] = useState(name)
    const [newGender, setNewGender] = useState(gender)
    const [newBirthDate, setNewBirthDate] = useState(birthDate)
    
    const handleChangeName = (e) => {
        setNewName(e.target.value)
    }

    const handleChangeGender = (e) => {
        setNewGender(e.target.value)
    }

    const handleChangeBirthDate = (e) => {
        setNewBirthDate(e.target.value)
    }

    const onSubmitUser = async (e) => {
        e.preventDefault();
        try {
            const response = await loggedApi.put('/profile/edit',{
               name : newName,
               gender : newGender,
               birthDate : newBirthDate
            });
            console.log("성공!!")
        } catch (error) {
            console.log(error);
        }
    }

    const [babyNewName, setBabyNewName] = useState(name)

    const handleChangeBabyName = (e) => {
        setBabyNewName(e.target.value)
    }

    const onSubmitBaby = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://api.mybebe.net/api/v1/baby/${id}`,{
                name: babyNewName
            },{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log('수정성공!!')
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = (e) => {
        onSubmitBaby(e)
        onSubmitUser(e)
    }


    const [profileImage, setProfileImage] = useState(null);

    const handleChangeImage = (e) => {
        setProfileImage(e.target.files[0])
    }

    const handleSubmitImage = (e) => {
        e.preventDefault();

        if (profileImage) {
            const formData = new FormData();
            formData.append('file', profileImage) //이름이 file 

            try {
                const response = loggedApi.put('/profile/avatar', formData, {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                    }
                })
            } catch (error) {
                console.log(error) 
            }
        }
    }







  
    return (
        <div>
            <form onSubmit={handleSubmitImage}>
                <input type='file' onChange={handleChangeImage} />
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
         <form onSubmit={onSubmitBaby}>
            <div>
                <label>이름 :</label>
                <input type='text' defaultValue={babyName} onChange={handleChangeBabyName} />
            </div>
        </form>
        <button onClick={handleClick}>수정 완료하기</button>
        </div>
    );
}

