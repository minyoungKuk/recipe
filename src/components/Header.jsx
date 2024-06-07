import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setIsLoginOpen, signOut } from "../redux/slices/auth.slice";
import { openModal } from "../redux/slices/modal.slice";
import Button from "./Button";
const StyledHeaderContainer = styled.header`
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid #d9d9d9;
  padding: 20px;
`;
const StyledLogo = styled.img`
  width: 180px;
  height: auto;
  cursor: pointer;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonWrapperWithMargin = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin-left: 20px;
  }
`;
const Header = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleMyPageClick = () => {
    navigate("/mypage");
  };
  const handleLoginClick = useCallback(() => {
    dispatch(openModal({ modalType: "login" }));
    dispatch(setIsLoginOpen(true));
  }, [dispatch]);
  const handleLogoutClick = () => {
    dispatch(signOut());
    navigate("/");
  };
  return (
    <StyledHeaderContainer>
      <StyledLogo
        src="/images/icon/Logo.png"
        alt="로고"
        onClick={handleLogoClick}
      />
      <StyledButtonContainer>
        <ButtonWrapperWithMargin>
          {isLoggedIn && (
            <Button color="#FE9F4D" size="small" onClick={handleMyPageClick}>
              마이페이지
            </Button>
          )}
          {isLoggedIn ? (
            <Button color="#FE9234" size="small" onClick={handleLogoutClick}>
              로그아웃
            </Button>
          ) : (
            <Button color="#FE9234" size="small" onClick={handleLoginClick}>
              로그인
            </Button>
          )}
        </ButtonWrapperWithMargin>
      </StyledButtonContainer>
    </StyledHeaderContainer>
  );
};
export default Header;
