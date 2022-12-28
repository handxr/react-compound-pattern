import { ProductCard } from "./components";
import { useShoppingCart } from "./hooks/use-shopping-cart";
import "./styles/custom-styles.css";
import { Product } from "./types/product.interfaces";

const product1 = {
  id: "1",
  title: "Coffee Mug",
};

const product2 = {
  id: "2",
  title: "Donuts",
};

const products: Product[] = [product1, product2];

export default function App() {
  const { onProductCartChange, shoppingCart } = useShoppingCart();

  return (
    <>
      <h1>Shopping store</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            // onChange={onProductCartChange}
            // value={shoppingCart[product.id]?.count || 0}
            initialValues={{
              count: 4,
              maxCount: 10,
            }}
          >
            {({ resetCounter }) => (
              <>
                <ProductCard.Title />
                <ProductCard.Buttons />
                <button onClick={resetCounter}>Resetear</button>
              </>
            )}
          </ProductCard>
        ))}
      </div>
      {/* <div className="shopping-cart">
        <h2>Shopping cart</h2>
        <ul>
          {Object.values(shoppingCart).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              value={product.count}
              onChange={onProductCartChange}
            >
              <ProductCard.Title />
              <ProductCard.Buttons />
            </ProductCard>
          ))}
        </ul>
      </div> */}
    </>
  );
}
