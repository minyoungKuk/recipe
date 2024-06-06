import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/slices/auth.slice";
import { closeModal, openModal } from "../redux/slices/modal.slice";
import supabase from "../supabaseClient";
import Button from "./Button";
import Signup from "./Signup";

const LoginModal = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [loginError, setLoginError] = useState("");

  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleLogin = useCallback(async () => {
    if (!email || !password) {
      dispatch(
        openModal({
          modalType: "alert",
          modalProps: { message: "빈칸을 채워주세요" },
        })
      );
      return;
    }

    const { data: userData, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      dispatch(
        openModal({
          modalType: "alert",
          modalProps: { message: "오류가 발생했습니다." },
        })
      );
      return;
    }

    if (!userData || userData.password !== password) {
      setLoginError("아이디나 비밀번호를 확인해주세요.");
      return;
    }

    dispatch(signIn({ email, password })).then((result) => {
      if (result.error) {
        setLoginError(result.error.message);
      } else {
        dispatch(closeModal());
      }
    });
  }, [dispatch, email, password]);

  const handleSignUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
  };

  const handleAlertClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal-content">
      {isSignUpOpen && <Signup onClose={handleSignUpClose} />}
      {isOpen && !isSignUpOpen && (
        <>
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
          {loginError && <p>{loginError}</p>}
          <div className="modal-btn-wrap">
            <Button color="#ff8c27" onClick={handleSignUpOpen}>
              회원가입
            </Button>
            <Button color="#ff8c27" onClick={handleLogin}>
              로그인
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginModal;
