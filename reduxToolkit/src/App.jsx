import "./App.css";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import Product from "./components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider,createRoutesFromElements, Route} from "react-router-dom";

function App() {

  const router = createBrowserRouter(createRoutesFromElements)
  <Route path="/">
    <Route index element={<Dashboard/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
  </Route>

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
