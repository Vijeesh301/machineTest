import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import TableData from "../components/Table/components/TableData";

const Routes = () => {
  return (
    <>
      <RouterRoutes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/table-data" element={<TableData />}></Route>
      </RouterRoutes>
    </>
  );
};

export default Routes;
