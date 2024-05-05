import React from 'react';
import styled from 'styled-components';

const LetterWrapper = styled.div`
    z-index: 5;
    padding: 2rem;
    @media only screen and (max-width: 768px){
        padding: 1rem;
    }
`;

const LetterEditor = () => {
    return (
        <LetterWrapper>
            <Title>Letter From The Editor: </Title>
            <MobileTitle>Letter From The Editor: </MobileTitle>
            
            <Text>
                <p>Black History Month honors the lives, legacies, and contributions of Black Americans in shaping U.S. history. Every February, Spectator dedicates a special issue to the Black Columbians and residents of Morningside Heights and West Harlem whose​ voices, stories, and accomplishments make up the very fabric of our community.</p>
                <p>In this issue, explore the decades-long history of the Columbia Black Students’ Organization and the Barnard Organization of Soul & Solidarity and learn about an in-depth research project documenting the presidency of Barack Obama, CC ’83, through audio and visual material. Uncover the challenges in preserving West Harlem’s arts and culture programs in the face of recent city budget cuts, as well as the relationship between the oldest sidewalk shed in New York City and an iconic home to many of Harlem’s Black elite. Dive into the decline of Black pitchers through the lens of Columbia baseball and Columbia’s senior associate athletic director Cara Holdsclaw’s passion for uplifting women of color in sports. Immerse yourself in a photographic exhibition on Langston Hughes and a guest lecture from Grandmaster Flash, one of the founding fathers of hip-hop. Check out Black History Month events, book, and song recommendations from Spectrum and hear from Alma Mater herself on how to deal with rich besties, tokenizing peers, and campus paparazzi.</p>
                <p>We hope you’ll join us in our celebration with Spectator’s 2024 Black History Month edition, which inspires us all to pay tribute to the lasting impact of Black stories every day—this month, and every month.</p>
                <Spacing/>
                <p>Best wishes,</p>
            </Text>
            <Signatures>
                <Signature className='left'><div className='name'>Isabella Ramírez</div><div className='title'>Editor in Chief</div></Signature>
                <Spacing/>
                <Signature><div className='name'>Esha Karam</div><div className='title'>Managing Editor</div></Signature>
            </Signatures>
        </LetterWrapper>
    );    
};

const Title = styled.div`
    color: white;
    font-family: 'Black Han Sans';
    font-style: normal;
    font-weight: 43.75rem;
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
    
    color: white;
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
    color: white;
    font-family: 'Khula';
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
        color: white;
        font-style: normal;
        font-weight: 25rem;
        font-size: 2.4rem;
        line-height: 3.188rem;
        text-transform: capitalize;
        text-align: left;
        
        @media only screen and (max-width: 768px) {
            font-size: 2rem;
            line-height: 3px;
            padding-top: 15px;
        }
       
    }
    .title {
        color: white;
        font-style: normal;
        font-family: Khula;
        font-weight: 25rem;
        font-size: 1.125rem;
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