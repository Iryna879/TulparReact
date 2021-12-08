import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import {ServicePage} from "./components/pages/servicePage";



function App() {
  return (
      <BrowserRouter className="App">
        <header> тут заголовок </header>
        <ServicePage></ServicePage>

        {/*<Routes>
          <Route path="/product/:slug/:id" element={<ProductCard />} />
        </Routes>*/}

      </BrowserRouter>
  );
}

export default App;
