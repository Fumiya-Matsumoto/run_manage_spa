import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PracticePosts } from "./containers/PracticePosts";
import { Calender } from "./containers/Calender";
import { MyPage } from "./containers/MyPage";
import { Feeds } from "./containers/Feeds";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/practice_posts" element={<PracticePosts />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
