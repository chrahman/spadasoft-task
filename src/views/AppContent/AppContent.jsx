import React, { useEffect, Fragment } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

const AppContent = ({ routes }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" && navigate("/login");
    location.pathname === "" && navigate("/login");
  }, [location.pathname, navigate]);

  return (
    <Fragment>
      {/* {
                location.pathname !== '/login'&&
            location.pathname !== undefined &&
            location.pathname !== '/' ? (
                <p>AppBar<p/>
            ) : null
            } */}

      <Routes>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Fragment>
  );
};

export default AppContent;
