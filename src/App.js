import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./containers/Home";
import Navigation from './containers/Navigation'
import Project from './containers/ProjectDetail'
import Footer from './containers/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project:id" element={<Project />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
