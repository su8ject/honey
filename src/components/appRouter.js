import { Navigate, Routes, Route } from "react-router-dom";
import { Admin } from "../views/admin";
import { Delivery } from "../views/delivery";
import { Index } from "../views/main";
import { Products } from "../views/products";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="/products-honey" element={<Products type={"item"} />} />
      <Route path="/products-remanent" element={<Products type={"tool"} />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Index />} />
    </Routes>
  );
};
