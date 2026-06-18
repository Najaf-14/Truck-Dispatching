import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Pricing from "../Pages/Pricing";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import Driver from "../Pages/Driver";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Admin from "../Pages/Admin";
import Dashboard from "../Admin/Dashboard";
import DriversAdmin from "../Admin/DriversAdmin";
import TestimonialsAdmin from "../Admin/TestimonialsAdmin";
import ProtectedRoute from "./ProtectedRoute";
import ManageUsers from "../Admin/ManageUsers";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/driver" element={<Driver />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <Admin />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="drivers" element={<DriversAdmin />} />
        <Route path="testimonials" element={<TestimonialsAdmin />} />
        <Route path="manageUsers" element={<ManageUsers />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
