import { React} from 'react';
import Credits from './Credits';
import Letter from '../containers/LetterEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import SpecLogoHeader from '../components/SpecLogoHeader';

const HomeContainer = styled.div`
    width: 100%;
    background-color: #BFC4DA;
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
    
`;

const TopWrapper = styled.div`
    padding: 0 5%;
`;


const Home = () => {

    return (
        <HomeContainer>
                <Header>
                    <SpecLogoHeader/>
                    <Photo>
                        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/RYKCC2DODRDRFC2KV7J4IO3VJQ.jpg" alt = "commencement illustration" style = {{width: '100%', height: '100%'}}></img>
                    </Photo>
                </Header>
                <MobileNavBar/>
                    <HomeSectionContainer>
                        <TopWrapper>
                            <NavBar/>
                            <Letter/>
                        </TopWrapper>
                        <Credits/>
                    </HomeSectionContainer>
        </HomeContainer>
    );
};

export default Home;