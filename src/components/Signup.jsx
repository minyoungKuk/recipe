import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openModal } from "../redux/slices/modal.slice";
import Button from "./Button";

const Form = styled.form`
  width: 340px;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  width: 100%;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [chkPassword, setChkPassword] = useState("");
  const emailRef = useRef(null);
  const dispatch = useDispatch();

  const handleClickButton = useCallback(() => {
    dispatch(
      openModal({
        modalType: "alert",
        modalProps: { message: "테스트 내용 . . . .ㅎ" },
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleSignup = useCallback(
    (e) => {
      e.preventDefault();
    },
    [email, nickname, password, chkPassword]
  );

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
    },
    [email, password]
  );

  return (
    <div className="container">
      <Form>
        <FormGroup>
          <label htmlFor="email">아이디(이메일)</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
            required
          />
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="chkPassword">비밀번호 확인</label>
          <input
            type="password"
            id="chkPassword"
            value={chkPassword}
            onChange={(e) => setChkPassword(e.target.value)}
            required
          />
        </FormGroup>

        <ButtonContainer>
          <Button color="#FE9234" onClick={handleLogin}>
            회원가입
          </Button>
          <Button onClick={handleClickButton}>dd</Button>
        </ButtonContainer>
      </Form>
    </div>
  );
};

export default SignUp;
