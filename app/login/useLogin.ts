import { useState } from "react";
import { tryLogin } from "@/api/login";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [isValidforUid, setIsValidforUid] = useState(false);
  const [isValidforPassword, setIsValidforPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault(); // Prevent the form from reloading the page

    try {
      const response = await tryLogin({ uid, password });
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

  const handleValidUid = () => {
    if (uid.length < 1) {
      setIsValidforUid(true);
    } else {
      setIsValidforUid(false);
    }
  };

  const handleValidPassword = () => {
    if (password.length < 1) {
      setIsValidforPassword(true);
    } else {
      setIsValidforPassword(false);
    }
  };

  return {
    uid,
    password,
    isValidforUid,
    isValidforPassword,
    setUid,
    setPassword,
    handleLogin,
    handleValidUid,
    handleValidPassword,
  };
};
