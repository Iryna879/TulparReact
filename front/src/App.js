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
import "./style/header.css";
import "./media/mediaHeader.css";
import "./media/mediaWhatIsBlock.css";
import "./media/mediaServicesRow.css";
import ButtonCallback from "./components/otherComponents/buttonCallback";
import Page404 from "./components/404/page404";
import Auth0ProviderWithHistory from "./providers/Auth0ProviderWithHistory";
import ProfilePage from "./components/patient/profilePage";
import SearchDoctor from "./components/patient/searchDoctor";
import SelectDate from "./components/patient/selectDate";
import BookingSlots from "./components/patient/bookingSlots";
import Confirmation from "./components/patient/confirmation";
import AppointmentStatus from "./components/patient/appointmentStatus";


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
            <Route  path="/profile/searchdoctor" element={<SearchDoctor />} />
            <Route  path="/profile/selectdate" element={<SelectDate />} />
            <Route path="/profile/book-slot" element={<BookingSlots />} />
            <Route path="/profile/confirmation" element={<Confirmation />} />
            <Route path="/profile/appointment-status" element={<AppointmentStatus />} />
          </Routes>
     </Auth0ProviderWithHistory>
      </BrowserRouter>
  );
}

export default App;
