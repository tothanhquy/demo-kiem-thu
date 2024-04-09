import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout.js";
import Home from "./home.js";
import Register from "./register.js";
import PersonTax from "./person-tax.js";
import AllowMarry from "./allow-marry.js";
import CitizenIdentificationCard from "./citizen-identification-card.js";
import DrivingLicense from "./driving-license.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="person-tax" element={<PersonTax />} />
          <Route path="allow-marry" element={<AllowMarry />} />
          <Route path="citizen-identification-card" element={<CitizenIdentificationCard />} />
          <Route path="driving-license" element={<DrivingLicense />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
