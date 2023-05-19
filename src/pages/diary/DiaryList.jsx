import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { loggedApi } from '../../axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function DiaryList() {
    
    const [diaries, setDiaries] = useState([])

    const getDiaries = async () => {
        try {
            const response = await loggedApi.get('/')
            setDiaries(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getDiaries()
    }, [])

    return (
        <div>
            <h1>다이어리 리스트 페이지</h1>
            <Link to='/new'>다이어리 새로쓰기</Link>
            <section>
                <ol className=' list-decimal list-inside'>
                    {
                        diaries ? diaries.map((diary) => (
                            <Link to={`/diary/${diary.id}`} key={diary.id}>
                                <li>
                                    <span>{diary.title}</span>
                                    <span>{moment(diary.createdAt).format('YYYY-MM-DD')}</span>
                                </li>
                            </Link>
                        )) : <h1>Loading...</h1>
                    }
                </ol>
            </section>
        </div>
    );
}

