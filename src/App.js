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

import ScrollIndicator from "./components/ScrollIndicator";
import Overlay from "./components/Overlay";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <ScrollIndicator />
      <Overlay />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project:id" element={<Project />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
