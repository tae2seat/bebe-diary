import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { loggedApi } from '../../axios';
import TagButton from '../../components/tag/TagButton';
import TagDetail from '../../components/tag/TagDetail'
import DeleteButton from '../../components/buttons/DeleteButton';

export default function DiaryDetail() {

    const {diaryId} = useParams()
    const navigate = useNavigate()

    const [diary, setDiary] = useState(null)
    
    const [tagValue, setTagValue] = useState(1)

    const handleTagValue = (tagValue) => {
        setTagValue(tagValue)
    }

    const getDiary = async () => {
        try {
            const response = await loggedApi.get(`/detail/${diaryId}`)
            setDiary(response.data)
        } catch (error) {
            console.log(error)
            navigate('/diaries')
        }
    }
    
    useEffect(() => {
        getDiary()
    },[loggedApi]) //왜?? 

    const handleClickDelete = async () => {
        try {
            const response = await loggedApi.delete(`/delete/${diaryId}`)
            alert("다이어리 삭제 성공!!")
            navigate('/diaries')
        } catch (error) {
            alert("다이어리 삭제 실패!!")
        }
    }

    if(!diary) { 
        return <h1>Loading...</h1>
    }
   
    return (
        <div>
            <div>
                <h1>Diary Detail Page</h1>
            </div>
            <div>
                <label>제목 :</label>
                <span>{diary.title}</span>
            </div>
            <div>
                <label>다이어리 작성날짜 : </label>
                <span>{diary.createdAt}</span>
            </div>
            <div>
                <div>
                    <TagButton  onClick={() => handleTagValue(1)} buttonText='일상 다이어리' />
                    <TagButton  onClick={() => handleTagValue(2)} buttonText='성장 다이어리' />
                    <TagButton  onClick={() => handleTagValue(3)} buttonText='체크 리스트 다이어리' />
                </div>
                <div>
                    <TagDetail tagValue={tagValue} diary={diary} />
                </div>
            </div>
            <div>
                <Link to={`/diary/${diaryId}/edit`} >수정하기</Link>
                <DeleteButton onClick={handleClickDelete} />
            </div>
        </div>
    );
}

