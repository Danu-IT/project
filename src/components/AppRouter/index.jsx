import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Profile from "../../pages/Profile";
;

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/chats'>
        <Route path=':id' element={<HomePage></HomePage>}></Route>
      </Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
      <Route path="/*" element={<HomePage to="/posts" replace />}></Route>
    </Routes>
  )
};

export default AppRouter;