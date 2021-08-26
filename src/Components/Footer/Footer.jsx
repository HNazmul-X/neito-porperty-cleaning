import { InlineIcon } from '@iconify/react';
import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="icons text-center p-4">
                    <InlineIcon height="40px" icon="ant-design:instagram-filled" />
                    <InlineIcon height="35px" icon="brandico:facebook-rect" />
                </div>
                <div className="row row-cols-1 row-cols-md-3 align-items-center">
                    <div className="col text-center">
                        <h3>Lorem, ipsum dolor.</h3>
                    </div>
                    <div className="col text-center">
                        <h3>(483) -458 55983</h3>
                    </div>
                    <div className="col text-center">
                        <h3>Lorem ipsum dolor sit amet. Lorem, ipsum.</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;