import React, { useState, useEffect } from "react";
import "./index.css";
import NavbarLaw from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation } from "react-router-dom";
import Rating from "react-rating";
import { BiStar } from "react-icons/bi";
export default function ProductInfo() {
  let location = useLocation();
  let [product, setproduct] = useState({});
  useEffect(() => {
    if (location.state != undefined) {
      setproduct(location.state.product);
    }
  }, []);
  return (
    <>
      <NavbarLaw />
      <br />
      <br />
      <br />
      <br />
      <div className="container product">
        <div className="row">
          <div className="col-md-6">
            <div className="c1">
              {" "}
              <img className="product-image" src={product.image} />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="title">{product.title}</h2>
            <h1 className="price">
              £ {product.price}
              <Rating start={0} stop={5} initialRating={2} className="rating" />
              <br />
            </h1>
            <span className="acprice"> £ 4000</span> {"      "}
            <span className="off">50% Off</span>
            <p className="des">{product.description}</p>
            <button className="btn">Add to Cart</button>
            <button className="btn">Buy</button>
          </div>
        </div>
      </div>
    </>
  );
}
