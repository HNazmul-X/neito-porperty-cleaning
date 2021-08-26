import React from "react";
import styled from "styled-components";

const BasicCard = ({ className, width }) => {
    const BasicCardDiv = styled.div`
        width: ${(props) => props.width || ""};
    `;

    return (
        <BasicCardDiv width={width} className={className} id="basic-card">
            <div className="content">
                <h1>TestoMonials</h1>
                <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione fugiat corrupti ea vel iure doloremque officiis quos pariatur facilis.</p>
            </div>
            <div className="button">
                <div className="btn">Read More</div>
            </div>
        </BasicCardDiv>
    );
};

export default BasicCard;
