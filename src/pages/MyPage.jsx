import React, { useRef, useState } from "react";

export const MyPage = () => {
  const [profileImg, setProfileImg] = useState(null);
  const fileInputRef = useRef(null);

  const onChangeImg = (e) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setProfileImg(imgUrl);
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <h2>MyPage</h2>
      <div>
        <div
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            cursor: "pointer",
            borderRadius: "50%",
          }}
          onClick={handleImageClick}
        >
          {profileImg ? (
            <img
              src={profileImg}
              alt="프로필 사진"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <img
              src="../public/images/icon/ic-back.png"
              alt="기본 이미지"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <input
          type="file"
          onChange={onChangeImg}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default MyPage;
