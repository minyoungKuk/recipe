import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackButton = () => {
  const navigate = useNavigate();

  const goToBack = () => navigate(-1);

  return <BackImage src="/images/icon/ic-back.png" onClick={goToBack} />;
};

const BackImage = styled.img`
  width: 50px;
  height: 50px;

  margin-top: 10px;

  cursor: pointer;
`;

export default BackButton;
