import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/slices/profileSlice";
import { getBabyProfile } from "../../redux/slices/babyProfileSlice";
import { Link } from "react-router-dom";


export default function Profile() {
  const dispatch = useDispatch();
  const { name, email, gender, birthDate, userId, avatar } = useSelector(
    (state) => state.profile
  );
  const { babyName, babyBirthDate, babyGender, expectDate, pregnantDate } = useSelector((state) => state.babyProfile);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile());
      dispatch(getBabyProfile());
    }
  }, [isLoggedIn]);

  return (
    <div className="flex justify-around w-full px-16 py-16">
      <div className="flex flex-col  bg-white w-[480px] h-96">
        <div>
          <img src={avatar} alt="profilePhoto" />
        </div>
        <div>
          <label>이름 :</label>
          <span>{name}</span>
        </div>
        <div>
          <label>email :</label>
          <span>{email}</span>
        </div>
        <div>
          <label>gender :</label>
          <span>{gender}</span>
        </div>
        <div>
          <label>생년월일 :</label>
          <span>{birthDate}</span>
        </div>
      </div>
      <div className="flex flex-col  bg-white w-[480px] h-96">
        <div>
          <label>아기 이름 : </label>
          <p>{babyName}</p>
        </div>
        <div>
          <label>태어난 날 : </label>
          <p>{new Date(babyBirthDate).toLocaleDateString()}</p>
        </div>
        <div>
          <label>아기 성별 : </label>
          <p>{babyGender}</p>
        </div>
        <div>
          <label>출산예정일: </label>
          <p>{expectDate}</p>
        </div>
        <div>
          <label>임신한 날짜 : </label>
          <p>{pregnantDate}</p>
        </div>
      </div>

      <Link to={`/profile/${userId}/edit`} >
                프로필 수정하기 
            </Link>
    </div>
  );
}

{
  /* <Link to={`/profile/${userId}/edit`} >
                프로필 수정하기 
            </Link> */
}
