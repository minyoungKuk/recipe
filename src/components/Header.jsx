import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
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
`;

const StyledLogo = styled.img`
  width: 180px;
  height: auto;
  cursor: pointer;
`;

const StyledSearchInput = styled.input`
  width: 180px;
  height: 40px;
  padding: 5px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin-top: 25px;
  position: relative;
  background: none;

  &::placeholder {
    color: #d9d9d9;
  }

  &:focus {
    outline: none;
  }
`;

const StyledSearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 20px 0 5px;
  cursor: pointer;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapperWithMargin = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const Header = ({ isLoggedIn, onLogout }) => {
  const dispatch = useDispatch();

  const handleMyPageClick = () => {
    console.log("마이페이지 클릭");
  };

  const handleLoginClick = useCallback(() => {
    dispatch(openModal({ modalType: "login" }));
  }, [dispatch]);

  return (
    <StyledHeaderContainer>
      <StyledLogo src="/images/icon/Logo.png" alt="로고" />
      <StyledButtonContainer>
        <StyledSearchInput type="text" placeholder="search.." />
        <StyledSearchIcon src="/images/icon/ic-search.png" alt="검색 아이콘" />

        <ButtonWrapperWithMargin>
          <Button color="#FE9F4D" size="small" onClick={handleMyPageClick}>
            마이페이지
          </Button>
          {isLoggedIn ? (
            <Button color="#FE9234" size="small" onClick={onLogout}>
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
