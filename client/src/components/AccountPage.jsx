import React from "react";

const AccountPage = () => {
    return (
        <>
            <div className="container" style={{ marginTop: "100px" }}>
            <div className="left-side">
                <div className="profile-icon"></div>
                <div className="account-menu"></div>
            </div>
            <div className="right-side">
                <div className="container">
                    <div className="flex-box">
                    </div>
                    <div></div>
                    <div>
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
