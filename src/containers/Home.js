import { React} from 'react';
import Credits from './Credits';
import Letter from '../containers/LetterEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import SpecLogoHeader from '../components/SpecLogoHeader';
import backgroundImage from '../assets/backgroundImage.png'

const HomeContainer = styled.div`
    width: 100%;
    background-color: rgba(158, 206, 235, 0.5);
    background-image: url(${backgroundImage});
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Photo = styled.div`
    width: 100%;
   
`;

const HomeSectionContainer = styled.div`
    margin-left: 4.5rem;
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
    }
`

const Home = () => {

    return (
        <HomeContainer>
                <SpecLogoHeader/>
                <MobileNavBar/>
                <Photo>
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/RYKCC2DODRDRFC2KV7J4IO3VJQ.jpg" alt = "commencement illustration" style = {{width: '100%'}}></img>
                </Photo>
                <HomeSectionContainer>
                    <NavBar/>
                    <Letter/>
                    <Credits/>
                </HomeSectionContainer>
        </HomeContainer>
    );
};

export default Home;