import axios from "axios";
import Cookies from "js-cookie";
import { memo, FC, useContext } from "react";
import { AuthContext } from "../../App";

export const MyPage: FC = memo(() => {
  const { isSignedIn, currentUser } = useContext(AuthContext);
  return (
    <>
      {
        isSignedIn && currentUser ? (
          <>
            <h1>Signed in successfully!</h1>
            <h2>Email: {currentUser?.email}</h2>
            <h2>Name: {currentUser?.name}</h2>
          </>
        ) : (
          <h1>Not signed in</h1>
        )
      }
    </>
  )
});
