import React from "react";

const LandingPage = () => {
    return (
    <>
        <div className="order-now" style={{ marginTop: "100px" }}>
                <h3>SoundBeam ERD - 3083</h3>
                <h1>Reinventing Sound Experience</h1>
                <button>Order Now</button>
        </div>
        <div className="specs" style={{ marginTop: "50px", display:"flex"}}>
                <div className="quality">
                    <img src="" alt="Icon" />
                    <h3>Title</h3>
                    <h5>isomkldfnslkdfjslkdjflkjdkfj;kdsjlf</h5>
                </div>
                <div className="bluetooth">
                    <img src="" alt="Icon" />
                    <h3>Title</h3>
                    <h5>isomkldfnslkdfjslkdjflkjdkfj;kdsjlf</h5>
                </div>
                <div className="battery">
                    <img src="" alt="Icon" />
                    <h3>Title</h3>
                    <h5>isomkldfnslkdfjslkdjflkjdkfj;kdsjlf</h5>
                </div>
                <div className="design">
                    <img src="" alt="Icon" />
                    <h3>Title</h3>
                    <h5>isomkldfnslkdfjslkdjflkjdkfj;kdsjlf</h5>
                </div>
        </div>
        <div className="featured" style={{ marginTop: "50px" }}>
            <div className="row1" style={{ marginTop: "50px" /*,display:"flex"*/ }}>
                <h3>As Featured on: </h3> 
                <img src="" alt="Source 1" />
                <img src="" alt="Source 2" />
            </div>
            <div className="row2">
                <img src="" alt="Source 1" />
                <img src="" alt="Source 2" />
            </div>
        </div>
        <div className="order-again" style={{ marginTop: "50px" }}>
            <img src="" alt="Product" />
            <div>
                <h1>Music Like You've 
                    Never Heard Before
                </h1>
                <p> lkamsdnfdskfnskjdfbsjdbfskdljfbsdjfbiruvbrew</p>
                <button>Order Now</button>
            </div>
        </div>
        <div className="reviews" style={{ marginTop: "50px" }}>
            <h1>Carousel</h1>
        </div>
        <div className="lifestyle-img" style={{ marginTop: "50px" }}>
            <h2>Image Effect</h2>
        </div>
        <div className="btm" style={{ marginTop: "50px" }}>
            <h3>Stay Focused</h3>
            <div>
                <p>Email Textbox 
                    <button>Subscribe</button>
                </p>
            </div>
        </div>
    </>
    );
};

export default LandingPage;
