import axios from "axios"
import Cookies from "js-cookie"

// 認証済みユーザーを取得
export const getCurrentUser = () => {
    if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
    return axios.get(
        "http://localhost:3000/v1/auth/sessions",{
            headers: {
            "access-token": Cookies.get("_access_token"),
            "client": Cookies.get("_client"),
            "uid": Cookies.get("_uid")
            }
        }
    )
};