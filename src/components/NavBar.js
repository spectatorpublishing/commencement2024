import React, {useState} from 'react';
import styled from 'styled-components';
import {sections} from '../data/sections';
import { NavHashLink } from 'react-router-hash-link';
import navBackground from '../assets/navbar.png';

const Container = styled.div`
    width: 100%;
    position: relative;
`;

const NavWrapper = styled.div`
    position: relative;
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: 1023px){
        display: none;
    }
`;

const NavImage = styled.img`
    position: absolute;
    z-index: 0;
    width: 100%;
    top: -40%;
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
`;

const NavText = styled.div`
    font-family: "Darumadrop One", sans-serif;
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