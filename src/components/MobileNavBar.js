import React, {useState} from 'react';
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import {sections} from '../data/sections';


const NavWrap = styled.div`
    color: white;
    position: absolute;
    top: 3rem;
    right: 0rem;
    a {
        text-decoration: none;
    }

    @media only screen and (min-width: 1080px){
        display: none;
    }

    @media only screen and (max-width: 1080px){
        display: flex;
        flex-direction: row;
    }
`;

const MobileNav = styled.div`
    display: none;
    padding: 0rem 1rem;
    @media only screen and (max-width: 1080px){
        display: flex;
        flex-direction: row;
    }
`;

const MobileMenu = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    margin: 2rem 1rem;
    border-radius: 20px;
    font-family: "Charter", sans-serif;
    font-weight: 300;
    background-color: #E9DDC7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #F8BEB9;

    @media only screen and (max-width: 1080px){
        display: flex;
        flex-direction: column;
    }
`;

const MobileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0 30px 0;
`;

const MenuIcon = styled.div`
    margin-left: auto;
    margin-right:0.5rem;
    display: flex;
    color: ${props => props.color};
    .menu {
        font-size:2.25rem;
    }
`;

const Link = styled.a`
    display: flex;
    font-size:1rem;
    padding: 0.85rem 1.25rem;
    width: fit-content;
    margin-left: auto;
    border-radius: 20px;
    color: ${props => props.currentSection ? 'rgba(137, 210, 251, 1)' : 'rgba(23, 82, 176, 1)'};
    font-weight: ${props => props.currentSection ? 900 : 400};
    background-color: ${props => props.currentSection ? 'rgba(23, 82, 176, 1)' : 'none'};
    &:hover{
         color: rgba(137, 210, 251, 1);
         cursor:pointer;
    }
`;

const NavText = styled.div`
    margin-right: 10px;
    font-style: normal;
    text-transform: uppercase;
`;

const Bullet = styled.span`
    width: 5px;
    height: 5px;
    background-color: ${(props) => (props.currentSection ? 'rgba(137, 210, 251, 1)' : 'rgba(23, 82, 176, 1)')};
    border-radius: 50%;
    margin: auto 0rem;
`;

const MobileNavBar = () => {
    const [show, setToggle] = useState(false);

    return (
        <NavWrap>
            <MobileNav>
                <MenuIcon>
                    <IconContext.Provider value={{ className: 'menu' }} >
                        {show ? <MdClose onClick={() => setToggle(!show)} /> : <GiHamburgerMenu onClick={() => setToggle(!show)} />}
                    </IconContext.Provider>
                </MenuIcon>
            </MobileNav>
            <MobileMenu>
                <MobileWrapper>
                    {sections.map((section, index) => {
                        return (
                            <>
                                {(show) ?
                                    <NavHashLink smooth to={section.url} style={{marginTop: '6`px'}}>
                                        <Link currentSection = {window.location.pathname === section.url} key={index} onClick={() => setToggle(!show)}>
                                            <NavText>{section.title}</NavText>
                                            <Bullet currentSection={window.location.pathname === section.url} />
                                        </Link>
                                    </NavHashLink> : null}
                            </>
                        )
                    })}
                </MobileWrapper>
            </MobileMenu>
        </NavWrap>
    );
};

export default MobileNavBar;