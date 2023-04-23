import React from 'react';

export default function DeleteButton({onClick}) {

    const handleClickDelete = async () => {
        try {
            const response = await loggedApi.delete(`/delete/${diaryId}`)
            alert("다이어리 삭제 성공!!")
            navigate('/diaries')
        } catch (error) {
            alert("다이어리 삭제 실패!!")
        }
    }

    return (
        <button onClick={handleClickDelete}>
            다이어리 삭제하기
        </button>
    );
}

