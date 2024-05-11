import { React} from 'react';
import Credits from './Credits';
import Letter from '../containers/LetterEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import SpecLogoHeader from '../components/SpecLogoHeader';
import backgroundImage from '../assets/backgroundImage.png';
import tape from "../assets/tape.png";

const HomeContainer = styled.div`
    width: 100%;
    background-color: rgba(158, 206, 235, 0.6);
    background-image: url(${backgroundImage});
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Header = styled.div`
    width: 100%;
    height: 100vh;
`;

const Photo = styled.div`
    width: 100%;
    height: 80%;
    position: relative;
`;

const HomeSectionContainer = styled.div`
    /* margin-left: 4.5rem;
    margin-right: 4.5rem;
    @media only screen and (max-width: 1400px){
        margin-left: 3.5rem;
        margin-right: 3.5rem;
    }
    @media only screen and (max-width: 1023px){
        margin-left: 2.5rem;
        margin-right: 2.5rem;
    }
    @media only screen and (max-width: 768px){
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    } */
`

const TapeOne = styled.img`
    position: absolute;
    top: -2rem;
    right: 6%;
    height: 10%;
    width: 20%;
`

const TapeTwo = styled.img`
    position: absolute;
    bottom: -1.5rem;
    left: 6%;
    height: 10%;
    width: 20%;
`;

const Home = () => {

    return (
        <HomeContainer>
                <Header>
                    <SpecLogoHeader/>
                    <Photo>
                        <TapeOne src = {tape}/>
                        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/RYKCC2DODRDRFC2KV7J4IO3VJQ.jpg" alt = "commencement illustration" style = {{width: '100%', height: '100%'}}></img>
                        <TapeTwo src = {tape}/>
                    </Photo>
                </Header>
                <MobileNavBar/>
                <HomeSectionContainer>
                    <NavBar/>
                    <Letter/>
                    <Credits/>
                </HomeSectionContainer>
        </HomeContainer>
    );
};

export default Home;