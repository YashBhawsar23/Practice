// import { useState } from "react";

import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import store from "./components/redux/store";
import { Provider } from "react-redux";

function App() {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  return (
    <>
      <Provider store={store}>
        <ProductList />
        <Cart />
      </Provider>
    </>
  );
}

export default App;
