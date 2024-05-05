import React, {useState} from 'react';
import styled from 'styled-components';
import {sections} from '../data/sections';
import { NavHashLink } from 'react-router-hash-link';

const NavWrapper = styled.div`
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: 1023px){
        display: none;
    }
`;

const VertNav = styled.div`
    display: flex;
`;

const Tab = styled.a`
    display: flex;
    text-align: center;
    width: fit-content;
    border-radius: 20px;
    color: ${props => props.currentSection ? 'rgba(137, 210, 251, 1)' : 'rgba(23, 82, 176, 1)'};
    font-weight: ${props => props.currentSection ? 900 : 400};
    background-color: ${props => props.currentSection ? 'rgba(23, 82, 176, 1)' : 'none'};
    padding: 0.85rem 1.25rem;
    font-size: 1rem;
    :hover {
        color: rgba(137, 210, 251, 1);
        cursor:pointer;
    }
`;

const NavText = styled.div`
    font-style: normal;
    text-transform: uppercase;
`;


const NavBar = ({isSection}) => {
    return(
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
    );
};

export default NavBar;