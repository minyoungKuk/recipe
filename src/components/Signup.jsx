import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { signUp } from "../redux/slices/auth.slice";
import { closeModal, openModal } from "../redux/slices/modal.slice";
import supabase from "../supabaseClient";
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

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [chkPassword, setChkPassword] = useState("");
  const emailRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleSignup = useCallback(
    async (e) => {
      e.preventDefault();

      if (password !== chkPassword) {
        dispatch(
          openModal({
            modalType: "alert",
            modalProps: { message: "비밀번호가 일치하지 않습니다." },
          })
        );
        return;
      }

      const { data: existingUser, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email);

      if (existingUser && existingUser.length > 0) {
        dispatch(
          openModal({
            modalType: "alert",
            modalProps: { message: "이미 사용되는 이메일입니다." },
          })
        );
        return;
      }

      dispatch(signUp({ email, password, nickname })).then((result) => {
        if (!result.error) {
          dispatch(closeModal());
        }
      });
    },
    [dispatch, email, nickname, password, chkPassword]
  );

  return (
    <div className="container">
      <Form onSubmit={handleSignup}>
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
          <Button color="#FE9234" size="large" type="submit">
            회원가입
          </Button>
        </ButtonContainer>
      </Form>
    </div>
  );
};

export default SignUp;
