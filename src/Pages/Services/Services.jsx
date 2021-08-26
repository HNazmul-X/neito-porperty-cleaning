import React from "react";
import { Link } from "react-router-dom";
import SERVICES_IMG from "../../Images/services-image1.jpg";
import SERVICES_IMG2 from "../../Images/services-image-2.jpg";

const Services = () => {
    return (
        <div id="services-page">
            <section class="service">
                <div class="container">
                    <div class="service_head">
                        <h2>Services</h2>
                    </div>
                    <div class="service_content">
                        <div class="row">
                            <div class="col-md-8">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis necessitatibus suscipit cum consequuntur et nobis iste laborum alias non soluta!</p>
                            </div>
                            <div class="col-md-4">
                                <Link to="/" class="btn d-block">
                                    View Full Service
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="service_img">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="img">
                                    <img src={SERVICES_IMG} alt="" class="img-fluid" />
                                    <div class="middle">
                                        <div class="text">Mowing</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="img">
                                    <img src={SERVICES_IMG2} alt="" class="img-fluid" />
                                    <div class="middle">
                                        <div class="text">Firebacks</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="img">
                                    <img src={SERVICES_IMG} alt="" class="img-fluid" />
                                    <div class="middle">
                                        <div class="text">Grading </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
