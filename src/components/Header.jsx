import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

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

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleMyPageClick = () => {
    navigate('/mypage');
  };

  const handleLoginClick = () => {
    console.log('로그인 클릭');
  };

  return (
    <StyledHeaderContainer>
      <StyledLogo
        src="/images/icon/Logo.png"
        alt="로고"
        onClick={handleLogoClick}
      />
      <StyledButtonContainer>
        <StyledSearchInput type="text" placeholder="search.." />
        <StyledSearchIcon src="/images/icon/ic-search.png" alt="검색 아이콘" />
        <ButtonWrapperWithMargin>
          <Button color="#FE9F4D" size="small" onClick={handleMyPageClick}>
            마이페이지
          </Button>
          <Button color="#FE9234" size="small" onClick={handleLoginClick}>
            로그인
          </Button>
        </ButtonWrapperWithMargin>
      </StyledButtonContainer>
    </StyledHeaderContainer>
  );
};

export default Header;
