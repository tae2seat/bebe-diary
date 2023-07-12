import React, { useState } from 'react';
import axios from 'axios';


export default function ProfileEdit() {

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
                const response = axios.put('https://api.mybebe.net/api/v1/profile/avatar', formData, {
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
            <div >
                <form onSubmit={handleSubmitImage}>
                    <input type='file' onChange={handleChangeImage} />
                    <button>사진 올리기</button>
                </form>

            </div>
        <   button>수정 완료하기</button>
        </div>
    );
}

