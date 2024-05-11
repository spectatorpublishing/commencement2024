import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'

const Container = styled.div`
    margin-top: 4rem;
    color: #233C70;
    padding: 2rem 2rem 0rem 2rem;
    @media only screen and (max-width: 768px){
        padding: 1rem 1rem 0rem 1rem;
    }
`;

const HeaderDiv = styled.div`
    color: #233C70;
`;

const Header = styled.h1`
    z-index: 10;
    font-weight: 43.75rem;
    font-size: 3.125rem;
    font-family: "Darumadrop One", sans-serif;
    font-weight: 400;
    text-align: center;
    font-style: normal;
    line-height: 4rem;
    @media only screen and (max-width: 768px) {
        font-size: 1.88rem;
        padding: 0;
    }
`;

const SectAndNames = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
    width: auto;
    margin-top: 7rem;
    @media only screen and (max-width: 768px){
        grid-template-columns: 1fr;
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
    font-family: "Oldenburg", serif;
    text-transform: uppercase;
    @media only screen and (max-width: 1216px){
        font-size: 1.8rem;
        width: 18rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 1.7rem;
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
    font-family: "Oldenburg", serif;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-transform: none;
    @media only screen and (max-width: 1216px){
        font-size: 1rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 0.8rem;
    }
    @media only screen and (max-width: 768px){
        font-size:1rem;
    }
`;



const Credits = () => {
    return (
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
    )
};

export default Credits;