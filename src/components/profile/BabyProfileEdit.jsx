import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getBabyProfile } from '../../redux/slices/babyProfileSlice';
import { useNavigate } from 'react-router-dom';

export default function BabyProfileEdit() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { name, id } = useSelector((state) => state.babyProfile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() =>{
        if(isLoggedIn){
            dispatch(getBabyProfile())
        }
    },[isLoggedIn])


    const [babyNewName, setBabyNewName] = useState(name)
    
    const handleChangeName = (e) => {
        setBabyNewName(e.target.value)
    }
   
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://api.mybebe.net/api/v1/baby/${id}`,{
                name: babyNewName
            },{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            navigate('/profile')
            console.log('수정성공!!')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>이름 :</label>
                <input type='text' defaultValue={name} onChange={handleChangeName} />
            </div>
            <button >수정 완료하기</button>
        </form>
    );
}

