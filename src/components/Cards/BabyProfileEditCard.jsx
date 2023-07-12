import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBabyProfile } from '../../redux/slices/babyProfileSlice'
import { loggedApi } from '../../axios';

export default function BabyProfileEditCard() {

    const dispatch = useDispatch()

    const { babyName, id } = useSelector((state) => state.babyProfile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
        if(isLoggedIn) {
            dispatch(getBabyProfile())
        }
    },[])

    const [babyNewName, setBabyNewName] = useState(babyName)

    const handleChangeBabyName = (e) => {
        setBabyNewName(e.target.value)
    }

    const onSubmitBaby = async (e) => {
        e.preventDefault();
        try {
            const response = await loggedApi.put(`/baby/${id}`,{
                name: babyNewName
            },{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log('수정성공!!')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={onSubmitBaby}>
            <div>
                <label>이름 :</label>
                <input type='text' defaultValue={babyName} onChange={handleChangeBabyName} />
            </div>
        </form>
    );
}

