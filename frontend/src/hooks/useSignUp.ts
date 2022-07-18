import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/api/user";

export const useSignUp = () => {
  const navigation = useNavigate();

  const [loading, setLoading] = useState(false);
  const signup = useCallback(
    (email: string, password: string, passwordConfirmation: string) => {
      setLoading(true);

      axios
        .post<User>(
          "http://localhost:3000/v1/auth",
          {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("registration res", res);
          navigation("/home");
        })
        .catch((error) => {
          alert("新規登録できません");
          console.log("registration error", error);
        })
        .finally(() => setLoading(false));
    },
    [navigation]
  );
  return { signup, loading };
};
