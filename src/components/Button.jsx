import React from "react";
import styled from "styled-components";

const sizeStyle = {
  small: "140px",
  medium: "180px",
  large: "100%",
};

const StyledButton = styled.button`
  flex: 0 0 auto;
  width: ${(props) => sizeStyle[props.size] || sizeStyle.small};
  height: 60px;
  padding: 10px;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #ff851b;
  }
`;

const Button = ({ color, size, onClick, children }) => {
  return (
    <StyledButton color={color} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
export default Button;
