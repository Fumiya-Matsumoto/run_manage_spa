import axios from "axios";
import Cookies from "js-cookie";
import { memo, FC } from "react";

const getUserData = () => {
  axios.get(
    "http://localhost:3000/v1/auth/sessions",{
        headers: {
        "access-token": Cookies.get("_access_token"),
        "client": Cookies.get("_client"),
        "uid": Cookies.get("_uid")
      }
    }
  )
  .then((res) => {
    console.log(res.data)
  });
}

export const MyPage: FC = memo(() => {
  getUserData();
  return <p>MyPageページです</p>;
});
