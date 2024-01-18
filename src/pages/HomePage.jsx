import React from "react";
import ProductList from "../components/products/ProductList";

const HomePage = () => {
  return (
    <div>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "10px",
        }}
      >
        <div>
          <h1
            style={{
              color: "darkred",
              letterSpacing: "1.5px",
              fontWeight: "600",
            }}
          >
            <span
              style={{
                color: "black",
                marginRight: "5px",
              }}
            >
              Store.
            </span>{" "}
            The best instruments in <br />
            Music Store "Longitudinal Wave"
          </h1>
        </div>
      </section>
      <ProductList />
    </div>
  );
};

export default HomePage;
