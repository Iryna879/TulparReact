import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./cssBootstrap/bootstrap.min.css";
import {Index} from "./components/pages/index";
import {ServicePage} from "./components/pages/servicePage";
import {ContactPage} from "./components/pages/contactPage";
import {CardioCenterPage} from "./components/pages/cardioCenterPage";
import {TraumaCenterPage} from "./components/pages/traumaCenterPage";
import {OurSpecialistsPage} from "./components/pages/ourSpecialistsPage";
import "./style/font.css";
import "./media/mediaHeader.css";
import "./media/mediaWhatIsBlock.css";
import "./media/mediaServicesRow.css";
import ButtonCallback from "./components/otherComponents/buttonCallback";
import Page404 from "./components/404/page404";
import Auth0ProviderWithHistory from "./providers/Auth0ProviderWithHistory";
import ProfilePage from "./components/otherComponents/profilePage";


function App() {
  return (
      <BrowserRouter className="App">
     <Auth0ProviderWithHistory>
       <ButtonCallback/>
          <Routes>
              <Route  path="*" element={<Page404 />} />
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cardioCenter" element={<CardioCenterPage />} />
            <Route path="/traumaCenter" element={<TraumaCenterPage />} />
            <Route path="/ourSpecialists" element={<OurSpecialistsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
     </Auth0ProviderWithHistory>
      </BrowserRouter>
  );
}

export default App;
