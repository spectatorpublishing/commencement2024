import React, {useState} from 'react';
import styled from 'styled-components';
import {sections} from '../data/sections';
import { NavHashLink } from 'react-router-hash-link';
import navBackground from '../assets/navbar.png';

const Container = styled.div`
    width: 80%;
    position: relative;
    z-index: 5;
    margin: auto;

    @media only screen and (min-width: 1680px){
        margin-top: 15rem;
        margin-bottom: 5rem;
    }
`;

const NavWrapper = styled.div`
    position: relative;
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: 1080px){
        display: none;
    }
`;

const NavImage = styled.img`
    position: absolute;
    z-index: 0;
    width: 100%;
    top: -25%;
    @media only screen and (min-width: 1680px){
        top: -30%;
    }

    @media only screen and (min-width: 1440px) and (max-width: 1680px){
        top: -40%;
    }

    @media only screen and (max-width: 1415px){
        top: -40%;
    }
    @media only screen and (max-width: 1080px){
        display: none;
    }
`;

const VertNav = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    z-index: 5;
`;

const Tab = styled.a`
    z-index: 5;
    display: flex;
    text-align: center;
    border-radius: 20px;
    color: ${props => props.currentSection ? 'rgba(137, 210, 251, 1)' : 'rgba(23, 82, 176, 1)'};
    font-weight: ${props => props.currentSection ? 900 : 400};
    background-color: ${props => props.currentSection ? 'rgba(23, 82, 176, 1)' : 'none'};
    padding: 0.85rem 1.25rem;
    margin: 0rem 3rem;
    font-size: 1.3rem;
    
    :hover {
        color: rgba(137, 210, 251, 1);
        cursor:pointer;
        z-index: 5;
    }

    @media only screen and (min-width: 1680px){
        font-size: 2rem;
    }

    @media only screen and (max-width: 1415px){
        margin: 0rem 2rem;
        font-size: 1rem;
        padding: 0.6rem 1.25rem;
    }
`;

const NavText = styled.div`
    font-family: "Charter", sans-serif;
    text-transform: uppercase;
    z-index: 5;
`;


const NavBar = ({isSection}) => {
    return(
        <Container>
            <NavImage src={navBackground} />
            <NavWrapper isSection={isSection}>
                <VertNav isSection={isSection}>
                {sections.map((section, index) => (
                    <NavHashLink smooth to={section.url}>
                        <Tab currentSection = {window.location.pathname === section.url} key={index}>
                            <NavText>{section.title}</NavText>
                        </Tab>
                    </NavHashLink>
                ))}
                </VertNav>
            </NavWrapper>
        </Container>
    );
};

export default NavBar;