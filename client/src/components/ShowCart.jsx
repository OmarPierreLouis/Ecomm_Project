import React, {useState}from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ShowCart = () => {
    const history = useHistory();
    const navigateToMyRoute = (history) => {
        history.push("/");
    };
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleSubtract = () => {
        setCount(count - 1);
    };
    return (
        <>
            <div className='flex-container' style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}>
                <h3>My Cart</h3>
                <div className='left-container' style={{ marginTop: "100px",display:"flex"}}>
                    <div className='cart-item'>
                        <div style={{ marginRight: " 20px" }}>
                            <img src="" alt="Product Image" />
                            <h3>Product Name</h3>
                            <h3>Price:$$$</h3>
                            <h3>Color: **^#%</h3>
                            <p>Quantity</p>
                            <p>{count}</p>
                            <p>(Should be prepopulated from order page)</p>
                            <button type="button" onClick={handleSubtract}>
                                -
                            </button>
                            <button type="button" onClick={handleAdd}>
                                +
                            </button>
                            
                        </div>
                    </div>
                    <div className='total-price'>
                        <h4>Price $$$</h4>
                    </div>
                </div>
                    <h3>Order Summary</h3>
                <div className='right-container' style={{ marginTop: "100px" }}>
                    <p>Subtotal      $$$$ </p>
                    <p>Estimated Delivery </p>
                    <p>Total  $$$$$$$</p>
                    <button type="button" onClick={() => navigateToMyRoute(history) }>
                        Checkout
                    </button>
                    
                </div>
            </div>
        </>
    );
};


export default ShowCart;