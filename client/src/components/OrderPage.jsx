import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import Form from "react-bootstrap/Form";

const OrderPage = () => {
                                      /*State Variables  */
  const history = useHistory();
  const navigateToMyRoute = (history) => {
    history.push("/");
  };
  const navigateToMyCart = (history) => {
    history.push("/api/edit");
  };
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1); 
  };
                                    /*State Functions  */
  const [openProductInfo, setOpenProductInfo] = useState(false);
  const [openRefundPolicy, setOpenRefundPolicy] = useState(false);
  const [openShippingInfo, setOpenShippingInfo] = useState(false);
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
            <div className="color-box">
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
            <div className="counter">
              <p>Quantity</p>
              <h2>{count}</h2>
              <button type="button" onClick={handleSubtract}>
                -
              </button>
              <button type="button" onClick={handleAdd}>
                +
              </button>
            </div>
            <div className="buy-btn">
              <button type="button" onClick={() => navigateToMyCart(history)}>
                Order Now
              </button>
              <div>
                <button type="button" onClick={() => navigateToMyCart(history)}>
                  Buy Now
                </button>
              </div>
                <div className="product-info">
                  <button type="button" onClick={() => setOpenProductInfo(!openProductInfo)}>
                    PRODUCT INFO {openProductInfo ? '-' : '+'}
                  </button>
                  {openProductInfo && (
                    <div>
                    <p>
                      jsdfbkasuhfaskhfalksdjbfskjdbfksdjfblskdjfbksjblskjdbfkfa
                    </p>
                    </div>
                  )}
                </div>
                <div className="return-refund-policy">
                  <button type="button" onClick={() => setOpenRefundPolicy(!openRefundPolicy)}>
                    RETURN AND REFUND POLICY {openRefundPolicy ? '-' : '+'}
                  </button>
                  {openRefundPolicy && (
                    <p>
                      jsdfbkasuhfaskhfalksdjbfskjdbfksdjfblskdjfbksjblskjdbfkfa
                    </p>
                  )}
                </div>
                <div className="shipping-info">
                  <button type="button" onClick={() => setOpenShippingInfo(!openShippingInfo)}>
                    SHIPPING INFO {openShippingInfo ? '-' : '+'}
                  </button>
                  {openShippingInfo && (
                    <p>
                      jsdfbkasuhfaskhfalksdjbfskjdbfksdjfblskdjfbksjblskjdbfkfa-border
                      slkdjnfskjdfksjdbfklsjdbflksjdbflksjdbfksjdbfklsjdbflskdjbffsdf
                    </p>
                  )}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderPage;
