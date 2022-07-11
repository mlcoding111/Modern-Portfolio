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
import { motion, useViewportScroll, useTransform } from "framer-motion";

function App() {
  // const { scrollYProgress } = useViewportScroll();
  // const initial = useTransform(scrollYProgress, x => x + 0.05);
  // scrollYProgress.onChange(console.trace);

  return (
    <BrowserRouter>
    
      <Navigation />
      <ScrollIndicator />
      <Overlay />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:name" element={<Project />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
