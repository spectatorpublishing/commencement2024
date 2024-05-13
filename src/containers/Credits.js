import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'
import creditBackground from '../assets/homeBackground.png';

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 2;
    margin-top: -16%;

    @media only screen and (max-width: 1080px){
        position: static;
    }
`;

const Container = styled.div`
    margin-top: 4rem;
    color: #233C70;
    padding: 20rem 2rem 0rem 2rem;
    z-index: 5;
    
    @media only screen and (max-width: 768px){
        padding: 1rem 1rem 0rem 1rem;
    }
`;

const BackgroundImg = styled.img`
    position: absolute;
    width: 100%;
    z-index: -1;
    @media only screen and (max-width: 1080px){
        display: none;
    }
`

const HeaderDiv = styled.div`
    color: #233C70;
`;

const Header = styled.h1`
    z-index: 5;
    font-weight: 43.75rem;
    font-size: 3.125rem;
    font-family: 'Against', sans-serif;
    font-weight: 400;
    text-align: center;
    font-style: normal;
    line-height: 4rem;
    @media only screen and (max-width: 768px) {
        font-size: 1.88rem;
        padding-top: 5rem;
    }
`;

const SectAndNames = styled.div`
    z-index: 5;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 120rem;
    margin-top: 7rem;
    padding: 0 7rem;

    @media only screen and (max-width: 1080px){
        padding: 0 3rem;
        height: 200rem;
    }

    @media only screen and (max-width: 768px){
        height: fit-content;
    }
`;

const Section = styled.div`
    z-index: 5;
    font-size: 1.5rem;
    font-weight: 400;
    width: auto;
    height: fit-content;
    margin-bottom: 2rem;
    padding:0;
    margin:0;
    font-family: "Charter", sans-serif;
    text-transform: uppercase;

    @media only screen and (max-width: 1216px){
        font-size: 1.8rem;
        width: 18rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 1.3rem;
        width: 16rem;
    }
    @media only screen and (max-width: 768px){
        font-size: 1.6rem;
        text-align: center;
        width: 100%;
    }
    @media only screen and (max-width: 600px){
        font-size: 1.4rem;
        text-align: center;
        width: 100%;
    }
`;

const Name = styled.div`
    z-index: 5;
    font-family: "Charter", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-transform: none;
    @media only screen and (max-width: 1216px){
        font-size: 0.9rem;
    }

    @media only screen and (max-width: 768px){
        font-size:1rem;
        margin: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`;





const Credits = () => {
    return (
        <Wrapper>
            <BackgroundImg src={creditBackground}/>
            <Container id="credits">
                <HeaderDiv><Header>STAFF WHO MADE THIS ISSUE POSSIBLE</Header></HeaderDiv>
                <SectAndNames>
                    {Object.entries(credits).map(([section, key]) => {
                        return(
                            <Section> {section} 
                            <br/>
                            {key.map((person, index) => {
                                return(
                                    <Name key={index}>{person.staff_name}, {person.title}</Name>
                                );
                            })}
                            <br/>
                            </Section>
                        );
                    })}
                </SectAndNames>
            </Container>
        </Wrapper>
    )
};

export default Credits;