import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ScrollTop from "./containers/ScrollTop";
import Home from "./containers/Home";
import Navigation from './containers/Navigation'
import Project from './containers/ProjectDetail'
import Footer from './containers/Footer'
import ScrollIndicator from "./components/ScrollIndicator";
import Overlay from "./components/Overlay";

import TopMessage from "./components/TopMessage";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
    <ScrollTop>
      <TopMessage />
      <Navigation />
      <ScrollIndicator />
      <Overlay />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:name" element={<Project />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </ScrollTop>
    </BrowserRouter>
  );
}
export default App;
