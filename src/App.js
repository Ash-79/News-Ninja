import "./App.css";
import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                country="in"
                apiKey={apiKey}
                pageSize={9}
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                country="in"
                apiKey={apiKey}
                pageSize={9}
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                country="in"
                apiKey={apiKey}
                pageSize={9}
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                country="in"
                apiKey={apiKey}
                pageSize={9}
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                country="in"
                apiKey={apiKey}
                pageSize={9}
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                country="in"
                apiKey={apiKey}
                pageSize={9}
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                country="in"
                apiKey={apiKey}
                pageSize={9}
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
