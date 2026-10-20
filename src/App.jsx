import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import ShowProduct from "./Pages/ShowProduct";
import ShowPerson from "./Pages/ShowPerson";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showproduct" element={<ShowProduct />} />
        <Route path="/showperson" element={<ShowPerson />} />
      </Routes>
    </BrowserRouter>
  );
}
