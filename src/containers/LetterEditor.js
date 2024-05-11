import React from 'react';
import styled from 'styled-components';
import tape from "../assets/tape.png";
import letterBack from '../assets/letterBackground.png';

const Wrapper = styled.div`
    position: relative;
    margin-top: 5rem;
`;

const LetterWrapper = styled.div`
    position: absolute;
    top: 8%;
    left: 0;
    padding: 10rem;
    @media only screen and (max-width: 768px){
        padding: 1rem;
    }
`;

const LetterImg = styled.img`
    width: 100%;
    height: 100%;
`;

const LetterEditor = () => {
    return (
        <Wrapper>
            <img src = {tape} style={{position: "absolute", left: "4%", height: "5%", width: "25%"}}/>
            <img src = {tape} style={{position: "absolute", right: "6%", height: "5%", width: "25%"}}/>
            <LetterImg src={letterBack} />
            <LetterWrapper>
                <Title>LETTER FROM THE EDITOR: </Title>
                <MobileTitle>Letter From The Editor: </MobileTitle>
                
                <Text>
                    <p>Dear readers,</p>
                    <p>The final year at Columbia for the class of 2024 has been marked by the devastating war in Gaza and its rippling effects on campus and throughout the world. As our community mourned and protested the violence—which for many, impacted their family, friends, and homes—students were expected to attend to their academics, extracurriculars, and lives as if it wasn’t at the forefront of everyone’s mind.</p>
                    <p>In the final weeks of the spring semester, University President Minouche Shafik’s testimony before Congress on antisemitism, the establishment of the “Gaza Solidarity Encampment,” and an occupation of Hamilton Hall reminiscent of the protests of 1968 thrust Columbia into the national spotlight. Our University inspired protests nationally and internationally, becoming the nexus of debates surrounding divestment, free speech, academic freedom, antisemitism, Islamophobia, and more. The students and faculty at the core of this discourse stepped up as the leaders, changemakers, and challengers of higher education as we know it.</p>
                    <p>This year’s seniors comprise a historic class. Most lost their high school graduations to a global pandemic and spent their first year—and now, the end of their last year—at Columbia behind a computer screen. Some who were scheduled to graduate will no longer cross the stage. Barely a week before the main ceremony, the University canceled Commencement and replaced it with a Convocation “For Students, By Students.”</p>
                    <p>At a time when it is difficult for many to celebrate, this Spectator special edition addresses campus events head-on while honoring the seniors who exemplify the talent and resilience of our community. From a timeline of the two weeks that forever changed Columbia, to athletes central to the successes of the women’s basketball team, to artists dedicated to the pursuit of their craft, to Spectator’s own graduating seniors, we hope you’ll join us in reflecting on a complex and extraordinary year.</p>
                    <p>Congratulations to the class of 2024—a class bound to be remembered.</p>
                    <p>Best wishes,</p>
                    <Spacing/>
                </Text>
                <Signatures>
                    <Signature className='left'><div className='name'>Isabella Ramírez</div><div className='title'>Editor in Chief</div></Signature>
                    <Spacing/>
                    <Signature><div className='name'>Esha Karam</div><div className='title'>Managing Editor</div></Signature>
                </Signatures>
            </LetterWrapper>
        </Wrapper>
    );    
};

const Title = styled.div`
    color: #233C70;
    font-family: "Darumadrop One", sans-serif;
    font-weight: bold;
    font-size: 3.125rem;
    line-height: 4rem;
    text-transform: capitalize;

    @media only screen and (max-width: 768px) {
        font-size: 1.88rem;
    }
  
    @media only screen and (max-width: 570px) {
        display: none;
    }

    @media only screen and (max-width: 400px) {
        padding: 0;
        font-size: 1.6rem;
        display: inline-block;
        display: none;
    }
`;

const MobileTitle = styled.div`
    
    color: #233C70;
    font-family: 'Black Han Sans';
    font-style: normal;
    font-weight: 43.75rem;
    font-size: 3.125rem;
    line-height: 4rem;
    text-transform: capitalize;

    @media only screen and (max-width: 768px) {
        font-size: 1.88rem;
    }
  
    @media only screen and (min-width: 570px) {
        display: none;
    }
`;

const Text = styled.div`
    p{
    color: #233C70;
    font-family: "Oldenburg", serif;
    font-style: normal;
    font-weight: 25rem;
    font-size: 1.29rem;
    line-height: 2rem;
    
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
    @media only screen and (max-width: 400px) {
        padding: 0;
        font-size: 0.9rem;
        display: inline-block;
    }
    }
`;

const Signatures = styled.div`
    font-family: 'Nothing You Could Do', cursive;
    font-weight: 25rem;
    font-size: 2.375rem;
    line-height: 3.188rem;
    display: flex;
    justify-content: space-evenly;
    
    @media only screen and (max-width: 768px){
        font-size: 1.88rem;
        text-align: left;
    }    
`;

const Spacing = styled.div`
    width: 8rem;
    height: 1.4rem;  
`;

const Signature = styled.div`
    .name {
        color: #233C70;
        font-style: normal;
        font-weight: 25rem;
        font-size: 2rem;
        line-height: 3.188rem;
        text-transform: capitalize;
        text-align: center;
        
        @media only screen and (max-width: 768px) {
            font-size: 2rem;
            line-height: 3px;
            padding-top: 15px;
        }
       
    }
    .title {
        color: #233C70;
        font-style: normal;
        font-family: "Special Elite", system-ui;
        font-weight: 25rem;
        font-size:  2rem;
        line-height: 1.813rem;
        margin: 0rem;

        @media only screen and (max-width: 768px){
            font-size: 1rem;
            display: inline-block;
        }
    }
    margin: 0rem;
`;

export default LetterEditor;