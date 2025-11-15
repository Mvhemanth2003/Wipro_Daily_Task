import { useSelector, useDispatch } from "react-redux";
import { increasePrice } from "./ProductsSlice";

export default function ProductsPage() {
  const products = useSelector((s) => s.products.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id}>
          {p.name} — ₹{p.price}
          <button onClick={() => dispatch(increasePrice(p.id))}>
            Increase Price
          </button>
        </div>
      ))}
    </div>
  );
}





