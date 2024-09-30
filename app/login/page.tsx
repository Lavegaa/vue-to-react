"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { tryLogin } from "@/api/login";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    console.log("onMounted");
    return () => {
      console.log("onUnmounted");
    };
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form from reloading the page

    try {
      const response = await tryLogin({ uid: userName, password });
      if (response) {
        router.push("/");
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.error(error);
      alert(`로그인 실패 에러 발생: ${error}`);
    }
  };

  /* lifecycle을 사용하기 위한 살짝 억지 예시입니다.
  const [status, setStatus] = useState<boolean>(false);

  const handleLoginWithLifeCycle = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault(); // Prevent the form from reloading the page

    try {
      const response = await tryLogin({ uid: userName, password });
      if (response) {
        setStatus(true);
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.error(error);
      alert(`로그인 실패 에러 발생: ${error}`);
    }
  };

  useEffect(() => {
    if (status) {
      router.push("/");
    }
  }, [status]);

  */

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>
          Login
        </button>
      </form>
    </div>
  );
}
