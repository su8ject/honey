import { Navigate, Routes, Route } from "react-router-dom";
import { Admin } from "../views/admin";
import { Delivery } from "../views/delivery";
import { Index } from "../views/main";
import { ProductsHoney } from "../views/productsHoney";
import { ProductsRemanent } from "../views/productsRemanent";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/products-honey" element={<ProductsHoney />} />
      <Route path="/products-remanent" element={<ProductsRemanent />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Navigate to="/index" />} />
    </Routes>
  );
};
