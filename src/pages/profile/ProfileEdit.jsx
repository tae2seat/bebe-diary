import React from 'react';
import UserProfileEdit from '../../components/profile/UserProfileEdit';
import BabyProfileEdit from '../../components/profile/BabyProfileEdit';

export default function ProfileEdit() {
    return (
        <div>
            <div>
                <UserProfileEdit />
            </div>
            <div>
                <BabyProfileEdit />
            </div>
        </div>
    );
}

