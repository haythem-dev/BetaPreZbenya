
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Categories from "@/pages/Categories";
import Products from "@/pages/Products";
import Offers from "@/pages/Offers";
import Subscribe from "@/pages/Subscribe";
import NotFound from "@/pages/not-found";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
