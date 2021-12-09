import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import {ServicePage} from "./components/pages/servicePage";
import {ContactPage} from "./components/pages/contactPage";
import "./style/font.css"; 


function App() {
  return (
      <BrowserRouter className="App">


        {<Routes>
            <Route path="/" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>}

      </BrowserRouter>
  );
}

export default App;
