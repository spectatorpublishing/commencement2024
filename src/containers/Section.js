import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import LeftArticle from '../components/LeftArticle';
import RightArticle from '../components/RightArticle';
import SpecLogoHeader from '../components/SpecLogoHeader';
import backgroundImage from '../assets/backgroundImage.png';
import banner from '../assets/sectionBanner.png';
import tape from "../assets/tape.png";

const Container = styled.div`
    min-height: 100vh;
    background-color: rgba(158, 206, 235, 0.6);
    background-image: url(${backgroundImage});
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Photo = styled.div`
    margin-bottom: 3rem;
    position: relative;
`;

const ArticlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 5rem;
    width: 100%;
`;


const Section = ({ articles }) => {
    return (
        <Container>
            <SpecLogoHeader/>
            <Photo>
                <img src = {tape} style={{position: "absolute", top: "-2rem", right: "6%", height: "25%", width: "20%"}}/>
                <img src={`${banner}`} alt = "commencement illustration shortened" style = {{width: '100%', height: '100%'}}/>
            </Photo>
            <NavBar isSection />
            <MobileNavBar />
            <ArticlesContainer>
                {articles.map((article, index) => (
                    (index % 2 === 0) ? <a style={{textDecoration:'none'}} href={article.article_link}><LeftArticle article={article} /></a> : <a style={{textDecoration:'none'}} href={article.article_link}><RightArticle article={article}/></a>
                ))}
            </ArticlesContainer>
        </Container>
    );
};


export default Section;


