import { memo, FC, useContext } from "react";
import { Navigate, Route, RouteProps, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { SignIn } from "../components/pages/SignIn";
import { Base } from "../components/pages/Base";
import { Calender } from "../components/pages/Calender";
import { PracticePosts } from "../components/pages/PracticePosts";
import { Feeds } from "../components/pages/Feeds";
import { MyPage } from "../components/pages/MyPage";
import { Page404 } from "../components/pages/Page404";
import { Registration } from "../components/pages/Registration";
import { AuthContext } from "../App";
import { Top } from "../components/pages/Top";


export const Router: FC = memo(() => {
  const { loading, isSignedIn } = useContext(AuthContext);
  const PrivateRoute = memo(({ children }: { children: React.ReactElement }) => {
    if (!loading) {
      if (isSignedIn) {
        return (
          <>
            {children}
          </>
        )
      } else {
        return <Navigate to="/signin" />
      }
    } else {
      return <></>
    }
  });

  const UnAuthRoute = memo(({ children }: { children: React.ReactElement }) => {
    if (!loading) {
      if (isSignedIn) {
        return <Navigate to="/" />
      } else {
        return (
          <>
            {children}
          </>
        )
      }
    } else {
      return <></>
    }
  });

  return (
    <Routes>
      <Route
        path="signin" 
        element={
          <UnAuthRoute>
            <SignIn />
          </UnAuthRoute>
        } 
      />
      <Route path="signup" element={<Registration />} />
      <Route 
        path="/"
        element={
          <PrivateRoute>
            <Base />
          </PrivateRoute>
        }
      >
        <Route index element={<Calender />} />
        <Route path="practice_posts" element={<PracticePosts />} />
        <Route path="feeds" element={<Feeds />} />
        <Route path="mypage" element={<MyPage />} />
      </Route>
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
})