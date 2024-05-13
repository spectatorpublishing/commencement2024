import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import LeftArticle from '../components/LeftArticle';
import RightArticle from '../components/RightArticle';
import SpecLogoHeader from '../components/SpecLogoHeader';
import sectionBackground from '../assets/sectionBackground.png';

const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    overflow: hidden;
    background-color: #BFC4DA;
`

const BackgroundImg = styled.img`
    position: absolute;
    width: 100%;
    top: 0%;
    z-index: 0;
`;

const Container = styled.div`
    min-height: 100vh;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SectionWrapper = styled.div`
    margin-top: 7%;
    z-index: 5;
    padding: 0 5%;
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

const Header = styled.div`
    text-align: center;
    width: 100%;
    font-size: 4rem;
    z-index: 5;
    margin-bottom: 10%;
    font-family: 'against', sans-serif;
    color: #233C70;
`;


const Section = ({ articles, header }) => {
    return (
        <Wrapper>
             <Container>
                    <SpecLogoHeader/>
                    <SectionWrapper>
                        <Header>{header}</Header>
                        <NavBar isSection />
                        <MobileNavBar />
                        <ArticlesContainer>
                            {articles.map((article, index) => (
                                (index % 2 === 0) ? <a style={{textDecoration:'none'}} href={article.article_link}><LeftArticle article={article} /></a> : <a style={{textDecoration:'none'}} href={article.article_link}><RightArticle article={article}/></a>
                            ))}
                        </ArticlesContainer>
                    </SectionWrapper>
                </Container>
            <BackgroundImg src={sectionBackground} />
        </Wrapper>
       
    );
};


export default Section;


