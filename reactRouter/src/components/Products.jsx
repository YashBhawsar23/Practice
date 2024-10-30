import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <input type="search" placeholder="Search Products" />

      <nav>
        <Link to="featured">Featured Products</Link>
        <Link to="new">New Products</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
