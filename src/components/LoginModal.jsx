import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/slices/auth.slice";
import { closeModal } from "../redux/slices/modal.slice";
import Button from "./Button";

const LoginModal = () => {
  const ERROR_MSG = "로그인에 실패하였습니다. 다시 시도해주세요.";
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await dispatch(signIn({ email, password }));
      dispatch(closeModal());
    } catch (error) {
      return alert("로그인에 실패했습니다. 다시 시도해주세요");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-box">
          <label htmlFor="userId"> 아이디(이메일) </label>
          <input
            id="userId"
            type="email"
            placeholder="이메일을 입력해주세요"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="userPw"> 비밀번호 </label>
          <input
            id="userPw"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="modal-btn-wrap">
          <Button color="#ff8c27" onClick={handleLogin}>
            회원가입
          </Button>
          <Button color="#ff8c27" onClick={handleLogin}>
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
