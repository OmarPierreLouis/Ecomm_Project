import React from "react";

const AccountPage = () => {
    return (
        <>
            <div className="container" style={{ marginTop: "100px",display: "flex", justifyContent: "center" }} >
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
                    <div className="container">
                        <div className="flex-box-top"  style={{display: "flex", justifyContent: "center" }}>
                            <div className="upper">
                                <h2>Account</h2>
                                <p>View and edit your personal info below</p>
                            </div>
                            <div className="buttons">
                                <button>
                                    Discard
                                </button>
                                <button>
                                    Update Info
                                </button>
                            </div>
                        </div>
                        <div className="lower">
                            <h2>Account</h2>
                            <p>Update your personal info below</p>
                        </div>
                        <div className="account-form">
                            <form action="account-info">
                                <div className="top-form">
                                    <label for="email"> Email* </label>
                                    <input type="text" />
                                    <label form="firstName"> First Name </label>
                                    <input type="text" />
                                </div>
                                <div className="bottom-form">
                                    <label for="lastName"> Last Name </label>
                                    <input type="text" />
                                    <label for="phone"> Phone </label>
                                    <input type="text" />
                                </div>
                            </form>
                                <button>
                                    Discard
                                </button>
                                <button>
                                    Update Info
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AccountPage;

