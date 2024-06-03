import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Form = styled.form.attrs(() => ({
  style: { width: "340px" },
}))``;

const FormGroup = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSignup = useCallback(
    (e) => {
      e.preventDefault();
      console.log("회원가입:", { email, password });
    },
    [email, password]
  );

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      console.log("로그인:", { email, password });
    },
    [email, password]
  );

  return (
    <div className="container">
      <Form>
        <FormGroup>
          <label htmlFor="email"> 아이디(이메일) </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={inputRef}
            required
          />
          <label htmlFor="password"> 비밀번호 </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <ButtonContainer>
          <Button color="#FE9F4D" onClick={handleSignup}>
            회원가입
          </Button>
          <Button color="#FE9234" onClick={handleLogin}>
            로그인
          </Button>
        </ButtonContainer>
      </Form>
    </div>
  );
};

export default Login;
