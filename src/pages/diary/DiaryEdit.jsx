import React, { useEffect, useState } from 'react';
import TagButton from '../../components/tag/TagButton';
import TagEdit from '../../components/tag/TagEdit'
import { loggedApi } from '../../axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function DiaryEdit() {

    const {diaryId} = useParams()
    const navigate = useNavigate()

    const [diary, setDiary] = useState(null)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [text, setText] = useState('')

    const getDiary = async () => {
        try {
            const response = await loggedApi.get(`/detail/${diaryId}`)
            setDiary(response.data)
            setTitle(response.data.title)
            setContent(response.data.content)
            setWeight(response.data.weight)
            setHeight(response.data.height)
        } catch (error) {
            console.log(error)
            navigate('/diaries')
        }
    }

    useEffect(() => {
        getDiary()
    },[loggedApi])

    const [tagValue, setTagValue] = useState(1)
    
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value)
    }

    const handleTagValue = (tagValue) => {
        setTagValue(tagValue)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await loggedApi.put(`/edit/${diaryId}`,{
                title,
                weight,
                height,
                content,
            })
            console.log('성공~!!!')
        } catch (error) {
            console.log(error)
        }
    }

    if(!diary) { 
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div>
                <h1>Diary Edit 페이지</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목 : </label>
                    <input type='text' onChange={handleChangeTitle}  />
                </div>
                <div>
                    <label>오늘의 날짜는?</label>
                    <input type='date' onChange={handleChangeDate} />
                </div>
                <div>
                    <div>
                        <TagButton onClick={() => handleTagValue(1)} buttonText='일상 다이어리' />
                        <TagButton onClick={() => handleTagValue(2)} buttonText='성장 다이어리'/>
                        <TagButton onClick={() => handleTagValue(3)} buttonText='체크 리스트 다이어리' />
                    </div>
                    <div>
                        <TagEdit tagValue={tagValue} content={content} setContent={setContent} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} text={text} setText={setText} />
                    </div>
                </div>
                <div>
                    <button>다이어리 수정하기</button>
                </div>
            </form>
        </div>
    );
}

