import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../App";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useSignUp = () => {
  const navigation = useNavigate();
  const { showMessage } = useMessage();
  const { setLoading, setIsSignedIn, setCurrentUser } = useContext(AuthContext);
 
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
          setIsSignedIn(true);
          setCurrentUser(res.data.data)
          showMessage({ title: "新規登録しました", status: "success" });
          navigation("/");
        })
        .catch((error) => {
          showMessage({ title: "新規登録できません", status: "error" });
          console.log("registration error", error);
        })
        .finally(() => setLoading(false));
    },
    [navigation]
  );
  return { signup };
};
