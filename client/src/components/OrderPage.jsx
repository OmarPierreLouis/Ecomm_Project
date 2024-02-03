import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Form from "react-bootstrap/Form";

const OrderPage = () => {
  const history = useHistory();
  const navigateToMyRoute = (history) => {
    history.push("/");
  };
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <h1>Order Page</h1>
        <div style={{ marginTop: "100px" }}>
          <button type="button" onClick={() => navigateToMyRoute(history)}>
            Home
          </button>
        </div>
        <div style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}>
          <div style={{ marginRight: " 20px" }}>
            <img src="" alt="Product Image" />
          </div>
          <div style={{ marginLeft: " 20px" }}>
            <h3>Product Name</h3>
            <h4>Price $$$</h4>
            <div>
              <h6>Color (Selected Color)</h6>
              <input
                type="radio"
                id="color-red"
                name="color"
                value="red"
              // checked={selectedColor === "red"}
              // onChange={handleColorChange}
              />
              <label htmlFor="color-red">Red</label>

              <input
                type="radio"
                id="color-blue"
                name="color"
                value="blue"
              // checked={selectedColor === "blue"}
              // onChange={handleColorChange}
              />
              <label htmlFor="color-blue">Blue</label>

              <input
                type="radio"
                id="color-green"
                name="color"
                value="green"
              // checked={selectedColor === "green"}
              // onChange={handleColorChange}
              />
              <label htmlFor="color-green">Green</label>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default OrderPage;
