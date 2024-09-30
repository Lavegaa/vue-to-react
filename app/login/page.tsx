"use client";

import { useLogin } from "./useLogin";

import "@/style/common.css";

export default function LoginPage() {
  const {
    uid,
    password,
    isValidforUid,
    isValidforPassword,
    setUid,
    setPassword,
    handleLogin,
    handleValidUid,
    handleValidPassword,
  } = useLogin();

  return (
    <div className="login_wrap">
      <div className="form_group">
        <h2>LOGIN</h2>
        <form onSubmit={handleLogin}>
          <div className="form_floating">
            <input
              type="text"
              id="id"
              className={`form_input ${isValidforUid ? "error" : ""}`}
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              onBlur={handleValidUid}
            />
            <label htmlFor="id">이메일 주소 또는 휴대폰 번호</label>
            {isValidforUid && (
              <div className="error_message">
                정확한 이메일 주소나 전화번호를 입력하세요.
              </div>
            )}
          </div>
          <div className="form_floating">
            <input
              type="password"
              id="password"
              className={`form_input ${isValidforPassword ? "error" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handleValidPassword}
              onKeyUp={(e) => e.key === "Enter" && handleLogin(e)}
            />
            <label htmlFor="password">비밀번호</label>
            {isValidforPassword && (
              <div className="error_message">
                비밀번호는 4~60자 사이여야 합니다.
              </div>
            )}
          </div>
          <button
            type="button"
            className="btn btn_primary"
            onClick={handleLogin}
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
