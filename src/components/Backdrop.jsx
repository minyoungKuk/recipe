import React from "react";
import styled from "styled-components";

const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Backdrop = ({ children, onClick }) => {
  return <BackdropWrapper onClick={onClick}>{children}</BackdropWrapper>;
};

export default Backdrop;
