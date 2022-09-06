import { Navigate, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Delivery from "./pages/Delivery";
import ProductsHoney from "./pages/ProductsHoney";
import ProductsRemanent from "./pages/ProductsRemanent";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/products-honey" element={<ProductsHoney />} />
      <Route path="/products-remanent" element={<ProductsRemanent />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="*" element={<Navigate to="/index" />} />
    </Routes>
  );
};

export default AppRouter;
