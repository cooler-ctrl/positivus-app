import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Services from "./services";
import Home from "./Home";
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}