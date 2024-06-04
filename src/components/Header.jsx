import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid #d9d9d9;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/path/to/logo.png" alt="로고" />
    </HeaderContainer>
  );
};

export default Header;
