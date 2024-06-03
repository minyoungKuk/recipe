import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, button {
    font-size: 20px;
  }
`;

const BodyContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Form = styled.form.attrs(() => ({
  style: { width: '370px' },
}))``;

const FormGroup = styled.div`
  margin-bottom: 25px;
  width: 370px;

  label {
    display: block;
    margin-bottom: 15px;
    font-size: 20px;
    text-align: left;
  }

  input {
    width: 100%;
    height: 60px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #cecece;
    border-radius: 5px;
    font-size: 20px;
    margin-bottom: 25px;

    &:focus {
      outline: none;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  flex: 0 0 auto;
  width: 160px;
  height: 60px;
  padding: 10px;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 20px;
  font-size: 20px;

  &:hover {
    background-color: #ff851b;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('회원가입:', { email, password });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('로그인:', { email, password });
  };

  return (
    <>
      <GlobalStyle />
      <BodyContainer>
        <Container>
          <Form>
            <FormGroup>
              <label htmlFor="email">아이디(이메일)</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={inputRef}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">비밀번호</label>
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
        </Container>
      </BodyContainer>
    </>
  );
};

export default Login;
