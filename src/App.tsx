import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import PublicLayout from "./layouts/PublicLayout";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import GalleryPage from "./pages/GalleryPage";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/browse" element={<GalleryPage />} />
          <Route path="/movie">
            <Route path=":movieId" element={<SingleMovie />} />
          </Route>
          <Route path="/favorite" element={<GalleryPage />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
