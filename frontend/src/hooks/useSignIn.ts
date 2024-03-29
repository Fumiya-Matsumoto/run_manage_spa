import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { User } from "../types/api/user";
import { AuthContext } from "../App";
import { useMessage } from "./useMessage";

export const useSignIn = () => {
  const navigation = useNavigate();
  const { showMessage } = useMessage();

  const { setLoading, setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const signin = useCallback(
    (email: string, password: string) => {
      setLoading(true);

      axios
        .post<User>(
          "http://localhost:3000/v1/auth/sign_in",
          {
            email: email,
            password: password
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("login res", res);
          Cookies.set("_access_token", res.headers["access-token"])
          Cookies.set("_client", res.headers["client"])
          Cookies.set("_uid", res.headers["uid"])

          setIsSignedIn(true);
          setCurrentUser(res.data.data)
          showMessage({ title: "ログインしました", status: "success" });
          navigation("/");
        })
        .catch((error) => {
          showMessage({ title: "ログインできません", status: "error" });
          console.log("login error", error);
        })
        .finally(() => setLoading(false));
    },
    [navigation]
  );
  return { signin };
};
