import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie">
          <Route index element={<ResultPage />} />
          <Route path=":movieId" element={<SingleMovie />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
