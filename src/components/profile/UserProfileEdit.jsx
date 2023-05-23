import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/slices/profileSlice';

export default function UserProfileEdit() {

    const dispatch = useDispatch()
    const { name, gender, birthDate } = useSelector((state) => state.profile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
        if(isLoggedIn){
            dispatch(getProfile())
        }
    },[isLoggedIn])

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

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loggedApi.put('/profile/edit',{
               name : newName,
               gender : newGender,
               birthDate : newBirthDate
            });
            alert('수정 성공!!');
        } catch (error) {
            console.log(error);
        }
    }


    return (    
        <form onSubmit={onSubmit}>
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
            <button>수정 완료하기</button>
        </form>
    );
}

