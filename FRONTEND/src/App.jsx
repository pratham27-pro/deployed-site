import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import SignIn from "./pages/Admin/SignIn";
import SignUp from "./pages/Admin/SignUp";
import Dashboard from "./pages/Admin/Dashboard";
import ClientSignUp from "./pages/Client/SignUp";
import ClientSignIn from "./pages/Client/SignIn";
import EmployeeSignUp from "./pages/Employee/SignUp";
import EmployeeSignIn from "./pages/Employee/SignIn";
import CampaignSignUp from "./pages/Campaign/SignUp";
import RetailerSignUp from "./pages/Retailer/SignUp";
import RetailerSignIn from "./pages/Retailer/SignIn";
import BulkUpload from "./pages/Admin/BulkUpload";
import Home from "./pages/Website/HomePage";
import About from "./pages/Website/AboutPage";
import ClientPage from "./pages/Website/ClientPage";
import Careers from "./pages/Website/CareerPage";
import Services from "./pages/Website/ServicesPage";
import ContactForm from "./pages/Website/ContactFormPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientsignup" element={<ClientSignUp />} />
        <Route path="/clientsignin" element={<ClientSignIn />} />
        <Route path="/employeesignup" element={<EmployeeSignUp />} />
        <Route path="/employeesignin" element={<EmployeeSignIn />} />
        <Route path="/campaignsignup" element={<CampaignSignUp />} />
        <Route path="/retailersignup" element={<RetailerSignUp />} />
        <Route path="/retailersignin" element={<RetailerSignIn />} />
        <Route path="/bulkupload" element={<BulkUpload />} />
      </Routes>
    </Router>
  );
};

export default App;
