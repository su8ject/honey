import { Navigate, Routes, Route } from "react-router-dom";
import { Index } from "./pages";
import { Admin } from "./pages/admin";
import { Delivery } from "./pages/delivery";
import { ProductsHoney } from "./pages/productsHoney";
import { ProductsRemanent } from "./pages/productsRemanent";

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
