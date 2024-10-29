import { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const cards = products.map((product) => (
    <div
      className="card"
      style={{ width: "18rem", margin: "1rem" }}
      key={product.id}
    >
      <img className="card-img-top" src={product.image} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>₹{product.price}
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="product-grid">{cards}</div>
    </>
  );
};

export default Product;
