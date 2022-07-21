import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { User } from "../types/api/user";
import { AuthContext } from "../App";
import { useMessage } from "./useMessage";

export const useSignOut = () => {
  const navigation = useNavigate();
  const { showMessage } = useMessage();

  const { setLoading, setIsSignedIn } = useContext(AuthContext);
  const signout = useCallback(
    () => {
      setLoading(true);

      axios
        .delete<User>(
          "http://localhost:3000/v1/auth/sign_out", { headers: {
            "access-token": Cookies.get("_access_token"),
            "client": Cookies.get("_client"),
            "uid": Cookies.get("_uid")
          }}
        )
        .then((res) => {
          console.log("logout res", res);
          Cookies.remove("_access_token")
          Cookies.remove("_client")
          Cookies.remove("_uid")

          setIsSignedIn(false);
          showMessage({ title: "ログアウトしました", status: "info"})
          navigation("/");
        })
        .catch((error) => {
          showMessage({ title: "ログアウトできません", status: "error" });
          console.log("logout error", error);
        })
        .finally(() => setLoading(false));
    },
    [navigation]
  );
  return { signout };
};
