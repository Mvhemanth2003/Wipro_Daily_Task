import React from "react";
import ErrorBoundary from "./ErrorBoundary";

function ProductCard({ product }) {
  if (!product) throw new Error("Product not found!");
  return <h4> Product: {product.name}</h4>;
}

export default function ErrorBoundaryDemo() {
  return (
    <div>
      <h2> Error Boundary Demo</h2>
      <ErrorBoundary>
        <ProductCard product={null} />
      </ErrorBoundary>
    </div>
  );
}