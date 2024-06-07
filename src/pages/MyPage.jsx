import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid"; // import uuid for generating unique filenames
import { setUser } from "../redux/slices/auth.slice";
import supabase from "../supabaseClient";
const StyledMypageWrapper = styled.div`
  width: 100%;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2rem;
    padding-bottom: 60px;
    text-align: left;
  }
  span {
    display: block;
  }
  .imgBox {
    padding-bottom: 40px;
  }
  .txtBox {
    display: flex;
    font-size: 0.8rem;
    flex-direction: column;
    padding-bottom: 20px;
  }
  .txtArea {
    display: flex;
    font-size: 1.2rem;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #efefef;
    button {
      padding: 10px 20px;
      margin-left: 20px;
      border: none;
      font-weight: 600;
      background-color: #000a68;
      border-radius: 6px;
      color: #fff;
      transition: all 0.2s ease;
      cursor: pointer;
      &:hover {
        background-color: #282f64;
      }
    }
  }
`;
const StyledUserImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid #d0d0d0;
  object-fit: cover;
`;

const MyPage = () => {
  const [profileImg, setProfileImg] = useState("/images/icon/user.png");
  const fileInputRef = useRef(null);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCard = async () => {
      const { data } = await supabase.from("users").select("*");
    };
    fetchCard();
  }, []);
  useEffect(() => {
    async function fetchUserData() {
      const { data: session, error } = await supabase.auth.getSession();
      if (error) {
        throw error;
      }
      const userEmail = session.session.user.email;
      const { data: user, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("email", userEmail);
      if (userError) {
        throw userError;
      }
      dispatch(setUser(user[0]));
    }
    fetchUserData();
  }, [dispatch]);
  const getCurrentEmail = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      return data.session?.user?.email;
    } catch (error) {
      console.error("Error getting current user ID:", error);
      return null;
    }
  };
  const updateProfileUrl = async (userEmail, url) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .update({ profile_url: url })
        .eq("email", userEmail);
      if (error) {
        throw error;
      }
      const updatedUser = { ...user, profile_url: url };
      dispatch(setUser(updatedUser));
    } catch (error) {
      console.error("Error updating profile URL:", error);
    }
  };
  const onChangeImg = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const { data, error } = await supabase.storage
        .from("profile_image")
        .upload(`profile/${uuidv4()}.png`, file);
      if (error) {
        throw error;
      }
      const newProfileUrl = `https://mjoukzlxxqktusvcfmcy.supabase.co/storage/v1/object/public/profile_image/${data.path}`;
      setProfileImg(newProfileUrl);
      const userEmail = await getCurrentEmail();
      if (userEmail) {
        await updateProfileUrl(userEmail, newProfileUrl);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <StyledMypageWrapper>
      <h2> 마이페이지 </h2>
      <div>
        {user && (
          <div>
            <span onClick={handleImageClick} className="imgBox">
              <StyledUserImage
                src={user.profile_url || profileImg}
                alt="유저 이미지"
              />
              <input
                id="image"
                type="file"
                accept=".png, .jpeg, .jpg"
                ref={fileInputRef}
                onChange={onChangeImg}
                style={{ display: "none" }}
              />
            </span>
            <span className="txtBox">
              <span>닉네임 </span>
              <span className="txtArea">{user.nickname}</span>
            </span>
            <span className="txtBox">
              <span>메일</span>
              <span className="txtArea">{user.email}</span>
            </span>
          </div>
        )}
      </div>
    </StyledMypageWrapper>
  );
};
export default MyPage;
