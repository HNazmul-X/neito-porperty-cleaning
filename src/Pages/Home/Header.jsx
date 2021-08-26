import React from "react";
import BasicCard from "../../Components/Card/BasicCard";
import BACKGROUND_IMG from "../../Images/home_page_background.png"

const Header = () => {
    return (
        <div className="container">

            <header id="header-of-homepage" className="mt-5">
                <img src={BACKGROUND_IMG} alt="" className="background" />

                <div className="row p-5">
                    <div className="col-md-6">
                    <BasicCard className="header-card"/>
                    </div>

                </div>

            </header>
        </div>
    );
};

export default Header;
