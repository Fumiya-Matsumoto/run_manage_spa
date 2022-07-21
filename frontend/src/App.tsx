import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/theme";
import { Router } from "./router/Router";
import { createContext, useEffect, useState } from "react";
import { User } from "./types/api/user";
import { getCurrentUser } from "./lib/api/auth";

export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
})

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  // 認証済みユーザーがいるかチェック。いた場合は、そのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)
        console.log(res?.data.data)
      } else {
        console.log("No current user");
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  // current_userが変更したら実行する
  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser }}>
          <Router />
        </AuthContext.Provider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
