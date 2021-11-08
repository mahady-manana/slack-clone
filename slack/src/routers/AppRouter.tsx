import React from "react";
import { Route, Routes } from "react-router-dom";
import { modules } from "./modules";

export const AppRouter = () => {
  return (
    <Routes>
      {modules.map((module) => {
        return (
          <Route
            path={module.path}
            element={module.component}
            key={module.id}
          />
        );
      })}
    </Routes>
  );
};
