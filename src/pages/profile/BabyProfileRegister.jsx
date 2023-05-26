import axios from 'axios';
import React, { useState } from 'react';

export default function BabyProfileRegister() {

    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [gender, setGender] = useState('')
    const [expectDate, setExpectDate] = useState('')
    const [pregnantDate, setPregnantDate] = useState('')

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeBirthDate = (e) => {
        setBirthDate(e.target.value)
    }
    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }
    const handleChangeExpectDate = (e) => {
        setExpectDate(e.target.value)
    }
    const handleChangePregnantDate = (e) => {
        setPregnantDate(e.target.value)
    }
    console.log(name, expectDate, pregnantDate)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://api.mybebe.net/api/v1/baby',{
                name,
                birthDate,
                gender,
                expectDate,
                pregnantDate
            },{
                headers : {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log("성공!!")
        } catch (error) {
                console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>태명/이름 :</label>
                    <input type='text' onChange={handleChangeName} />
                </div>
                <div>
                    <label>태어난 날짜 :</label>
                    <input type='date' onChange={handleChangeBirthDate} />
                </div>
                <div>
                    <label>성별 :</label>
                    <input type='text' onChange={handleChangeGender} />
                </div>
                <div>
                    <label>예정일 :</label>
                    <input type='date' onChange={handleChangeExpectDate} />
                </div>
                <div>
                    <label>임신한 날짜 :</label>
                    <input type='date' onChange={handleChangePregnantDate} />
                </div>
                <button>
                    <p>아기 정보 등록하기</p>
                </button>
            </form>
        </div>
    );
}

