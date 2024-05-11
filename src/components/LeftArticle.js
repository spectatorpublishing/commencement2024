import React from "react";
import styled from "styled-components";
import border from "../assets/blueBorder.png";
import tape from "../assets/tape.png";
import swipe from "../assets/darkblueSwipe.png"

const LeftArticleWrapper = styled.div`
    width: 50vw;
    margin: 15px;
    display: flex;

    @media screen and (max-width: 1023px) {
        width: 100%;
        max-width: 90vw;
        justify-content: center;
        margin: 10px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    @media screen and (max-width: 1023px) {
        width: 100%;
    }
`;

const MainImage = styled.div`
    width: 90%;
    height: 100%;
    position: relative;
    z-index: 2;
`;

const TitleImage = styled.div`
    display: flex;
    max-width: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Wrapper = styled.div`
    position: absolute;
    top: 3%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ArticleImage = styled.div`
    height: 80%;
    width: 92%;
    overflow: hidden;
`;

const ArticleAuthor = styled.div`
    color: black;
    font-family: "Gluten", cursive;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "slnt" 0;
    font-size: 1.8rem;
    line-height: normal;
    margin-top: 1rem;
    text-align: center;
    @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 1023px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.0rem;
    }
    @media screen and (max-width: 600px) {
        font-size: 0.9rem;
    }
    @media screen and (max-width: 550px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.7rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 0.6rem;
    }
    @media screen and (max-width: 400px) {
        font-size: 0.5rem;
    }
`;

const ArticleInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 0rem 0rem 0rem 0rem;
    color: #FFFFFF;
    text-align: center;
    font-family: "Gluten", cursive;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "slnt" 0;
    line-height: normal;
    text-transform: uppercase;
`;

const ArticleTitle = styled(ArticleInfo)`
    position: absolute;
    color: #DEF1FF;
    z-index: 2;
    font-size: 1.4rem;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 10%;
    padding-bottom: 10%;
    @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 1023px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    }
    @media screen and (max-width: 600px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 550px) {
        font-size: 0.7rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.6rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 0.5rem;
    }
    @media screen and (max-width: 400px) {
        font-size: 0.4rem;
    }
`;

const LeftArticle = ({ article }) => {
    return (
        <LeftArticleWrapper>     
            <Column>
                <MainImage>
                    <img src = {tape} style={{position: "absolute", top: "-2.5rem",  left: "29%", height: "13%"}}/>
                    <img src = {border} style={{width: "100%", height: "100%"}}/>
                    <Wrapper>
                        <ArticleImage>
                            <img src={article.image_url} style={{height: "100%", width: "100%", objectFit: "cover"}}/>
                        </ArticleImage>
                        <ArticleAuthor>
                            By {article.article_authors}
                        </ArticleAuthor>
                    </Wrapper>   
                </MainImage>
            </Column>
            <Column>
                <TitleImage>
                    <img src = {swipe} style={{marginLeft: "-5rem", width: "180%", height: "100%", zIndex: 1}}/>
                    <ArticleTitle>{article.article_title}</ArticleTitle>
                </TitleImage>
            </Column>
        </LeftArticleWrapper>
    );
}

export default LeftArticle;