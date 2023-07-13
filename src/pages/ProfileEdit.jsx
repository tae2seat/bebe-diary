import React from 'react';
import ProfileEditCard from '../components/Cards/ProfileEditCard';
import BabyProfileEditCard from '../components/Cards/BabyProfileEditCard';


export default function ProfileEdit() {

    return (
        <div>
            <ProfileEditCard />
            <BabyProfileEditCard />
            <button>수정 완료하기</button>
        </div>
    );
}

