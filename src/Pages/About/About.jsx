import React from 'react';
import ABOUT_PAGE__IMG from "../../Images/services-image-2.jpg"

const About = () => {
    return (
        <section id="about-page">
            <div className="container mb-5">
                <div className="row mt-5">
                    <div className="col-md-5 col-12 order-2 order-md-2">
                        <div className="p-2 ps-3 border-start border-5">
                            <h1 className="display-2">About Nieto Property</h1>
                        </div>
                        <div className="text mt-3 mt-md-5 fs-5 ps-4 ps-md-2">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque hic tenetur nostrum doloribus in reprehenderit qui consectetur delectus laborum ex mollitia magnam
                                porro odit, minus unde sapiente sequi iure obcaecati.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-7 col-12 order-1 order-md-2 overflow-hidden  rounded-3 rounded about-us-header-image">
                        <img src={ABOUT_PAGE__IMG} alt="nietho CLeaning Property" className="w-100 p-2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;