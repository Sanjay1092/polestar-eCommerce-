import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import React from "react";

function AppRouter() {
  return (
    <Routes>
      {ROUTES.map((element, i) => {
        return (
          <React.Fragment key={i}>
            <Route path={element.path} Component={element.component} />
          </React.Fragment>
        );
      })}
    </Routes>
  );
}

export default AppRouter;
