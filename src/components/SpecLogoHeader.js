import React from "react";
import styled from "styled-components";

const SpecLogo = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    padding-top: 3.813rem;
    margin-bottom: 1.75rem;
`;

const Image = styled.img`
    display: block;
    width: 15rem;
    height: auto;
    @media only screen and (max-width: 768px){
        width: 10rem;
    }
`;

const Line = styled.div`
    width: 93.75%;
    height: 0.063rem;
    background-color: white;
    margin-bottom: 3.75rem;
    align-self: center;
`;

const SpecLogoHeader = () => {
    return (
        <div>
            <SpecLogo><a href="https://www.columbiaspectator.com/"><Image src="https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png" alt="Columbia Spectator logo" ></Image></a></SpecLogo>
            <Line></Line>
        </div>
    )
}

export default SpecLogoHeader;