import { ProductItemAdmin } from "./productItemAdmin";

export const ProductListAdmin = ({ products, fetchProducts }) => {
  return (
    <div className="gallery">
      {products.map((product) => (
        <ProductItemAdmin
          product={product}
          key={product.objectId}
          fetchProducts={fetchProducts}
        />
      ))}
    </div>
  );
};
