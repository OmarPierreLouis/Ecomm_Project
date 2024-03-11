import React from 'react';

const WalletPage = () => {
    return (
        <>
        <div className="container"  style={{ marginTop: "100px",display: "flex", justifyContent: "center" }}>
            <div className="left-side">
                    <div className="profile-icon" style={{ marginBottom: "20px" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            class="bi bi-person-circle"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path
                                fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                            />
                        </svg>
                    </div>
                    <div className="account-menu">
                        <div>
                            <a className="nav-link-home" href="/sb/member/address">
                                My Addresses
                            </a>
                        </div>
                        <div>
                            <a className="nav-link-home" href="/sb/member/wallet">
                                My Wallet
                            </a>
                        </div>
                        <div>
                            <a className="nav-link-home" href="/sb/member/account">
                                My Account
                            </a>
                        </div>
                    </div>
            </div>
            <div className="right-side">
                <h2>My Wallet</h2>
                <p>Save your credit card details for faster checkout.</p>
                <div className="card-info">
                    <div className="header">
                        <h6>Credit Card
                            Expiration Date
                        </h6>
                    </div>
                    <div className="row-1">
                        MasterCard(0625) 
                        08/2025
                    </div>
                    <div className="row-2">
                        Visa(1216) 
                        11/2028
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};



export default WalletPage;