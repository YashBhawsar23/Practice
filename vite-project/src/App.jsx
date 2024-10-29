import "./App.css";
import products from "./Redux_toolkit/products";
import Product from "./Redux_toolkit/Product";
import Cart from "./Redux_toolkit/Cart";

function App() {
  return (
    <>
      <div className="App">
        <Cart />
        <div className="products">
          {products.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
