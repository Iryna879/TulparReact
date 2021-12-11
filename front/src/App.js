import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./cssBootstrap/bootstrap.min.css";
import {Index} from "./components/pages/index";
import {ServicePage} from "./components/pages/servicePage";
import {ContactPage} from "./components/pages/contactPage";
import {CardioCenterPage} from "./components/pages/cardioCenterPage";
import {TraumaCenterPage} from "./components/pages/traumaCenterPage";
import {OurSpecialistsPage} from "./components/pages/ourSpecialistsPage";
import "./style/font.css";



function App() {
  return (
      <BrowserRouter className="App">

        {<Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
            <Route path="/cardioCenter" element={<CardioCenterPage />} />
            <Route path="/traumaCenter" element={<TraumaCenterPage />} />
            <Route path="/ourSpecialists" element={<OurSpecialistsPage />} />
        </Routes>}

      </BrowserRouter>
  );
}

export default App;
