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
        justify-content: center;
        margin: 10px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
`;

const MainImage = styled.div`
    width: 90%;
    height: 100%;
    position: relative;
    z-index: 2;
`;

const TitleImage = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
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
    font-family: "Charter", sans-serif;
    font-size: 1.2rem;
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
    font-family: "Charter", sans-serif;
    line-height: normal;
    text-transform: uppercase;
`;

const ArticleTitle = styled(ArticleInfo)`
    position: absolute;
    color: #DEF1FF;
    z-index: 2;
    font-size: 1.2rem;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 10%;
    padding-bottom: 10%;

    @media screen and (max-width: 1024px) {
        font-size: 1.1rem;
        margin-left: -10%;
    }
    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 0.5rem;
    }
`;

const Tape = styled.img`
    position: absolute;
    top: -2.5rem;
    left: 29%;
    height: 13%;
`;

const ImageBorder = styled.img`
    width: 100%;
    height: 100%;
`;

const SideSwipe = styled.img`
    margin-left: -5rem;
    width: 180%;
    height: 100%;
    z-index: 1;

    @media screen and (max-width: 1024px) {
        width: 135%;
        margin-left: -10rem;
    }

    @media screen and (max-width: 768px) {
        width: 145%;
    }
`;

const LeftArticle = ({ article }) => {
    return (
        <LeftArticleWrapper>     
            <Column>
                <MainImage>
                    <Tape src = {tape}/>
                    <ImageBorder src = {border}/>
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
                    <SideSwipe src = {swipe}/>
                    <ArticleTitle>{article.article_title}</ArticleTitle>
                </TitleImage>
            </Column>
        </LeftArticleWrapper>
    );
}

export default LeftArticle;