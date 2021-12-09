import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./cssBootstrap/bootstrap.min.css";
import {ServicePage} from "./components/pages/servicePage";
import {ContactPage} from "./components/pages/contactPage";
import {CardioCenterPage} from "./components/pages/cardioCenterPage";
import {TraumaCenterPage} from "./components/pages/traumaCenterPage";
import {OurSpecialists} from "./components/pages/ourSpecialists";
import "./style/font.css";


function App() {
  return (
      <BrowserRouter className="App">


        {<Routes>
            <Route path="/" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
            <Route path="/cardioCenter" element={<CardioCenterPage />} />
            <Route path="/traumaCenter" element={<TraumaCenterPage />} />
            <Route path="/ourSpecialists" element={<OurSpecialists />} />
        </Routes>}

      </BrowserRouter>
  );
}

export default App;
