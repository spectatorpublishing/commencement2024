import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import LeftArticle from '../components/LeftArticle';
import RightArticle from '../components/RightArticle';
import SpecLogoHeader from '../components/SpecLogoHeader';
import backgroundImage from '../assets/backgroundImage.png';
import banner from '../assets/sectionBanner.png';

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
`;

const ArticlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    align-items: center;
`;


const Section = ({ articles }) => {
    return (
        <Container>
            <SpecLogoHeader/>
            <Photo>
                <img src={`${banner}`} alt = "commencement illustration shortened" style = {{width: '100%', height: '100%'}}/>
            </Photo>
            <NavBar isSection />
            <MobileNavBar />
            <ArticlesContainer>
                {articles.map((article, index) => (
                    (index % 2 === 0) ? <a style={{textDecoration:'none'}} href={article.article_link}><LeftArticle article={article} /></a> : <a style={{textDecoration:'none'}} href={article.article_link}><RightArticle article={article} color={index % 3}/></a>
                ))}
            </ArticlesContainer>
        </Container>
    );
};


export default Section;


