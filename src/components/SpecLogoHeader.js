import React from "react";
import styled from "styled-components";

const SpecLogo = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    padding-top: 3vh;
    margin-bottom: 1.75rem;
`;

const Image = styled.img`
    display: block;
    width: 36vw;
    height: 10%;
    @media only screen and (max-width: 768px){
        
    }
`;

const SpecLogoHeader = () => {
    return (
        <div>
            <SpecLogo><a href="https://www.columbiaspectator.com/"><Image src="https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png" alt="Columbia Spectator logo" ></Image></a></SpecLogo>
        </div>
    )
}

export default SpecLogoHeader;