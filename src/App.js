import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import ScrollTop from "./containers/ScrollTop";

import Home from "./containers/Home";
import Navigation from './containers/Navigation'
import Project from './containers/ProjectDetail'
import Footer from './containers/Footer'

import ScrollIndicator from "./components/ScrollIndicator";
import Overlay from "./components/Overlay";

import { AnimatePresence } from "framer-motion";

function App() {
  // const { scrollYProgress } = useViewportScroll();
  // const initial = useTransform(scrollYProgress, x => x + 0.05);
  // scrollYProgress.onChange(console.trace);


  return (
    <BrowserRouter>
    <ScrollTop>
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
