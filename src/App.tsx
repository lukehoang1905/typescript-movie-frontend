import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import PublicLayout from "./layouts/PublicLayout";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/movie">
            <Route index element={<ResultPage />} />
            <Route path=":movieId" element={<SingleMovie />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
