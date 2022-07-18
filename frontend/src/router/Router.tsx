import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Base } from "../components/pages/Base";
import { Calender } from "../components/pages/Calender";
import { PracticePosts } from "../components/pages/PracticePosts";
import { Feeds } from "../components/pages/Feeds";
import { MyPage } from "../components/pages/MyPage";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="home" element={<Base />}>
        <Route index element={<Calender />} />
        <Route path="practice_posts" element={<PracticePosts />} />
        <Route path="feeds" element={<Feeds />} />
        <Route path="mypage" element={<MyPage />} />
      </Route>
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
});