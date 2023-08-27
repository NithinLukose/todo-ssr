import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Todo from "./Todo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} Component={Landing} />
      <Route path={"/todo"} Component={Todo} />
    </Routes>
  );
};

export default AppRoutes;
