import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skill from './components/Skill';
import styled, { keyframes } from 'styled-components';

const FireworkAnimation = keyframes`
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
`;

const Firework = styled.div`
    position:absolute;
    top:${props => props.top};
    left:${props => props.left};
    width:${props => props.size}px;
    height:${props => props.size}px;
    background:${props => props.color};
    border-radius:50%;
    animation:${FireworkAnimation} ${props => props.duration}s linear infinite;
`;

const AppContainer = styled.div`
   position:relative;
   min-height:auto;
`;

const App = () => (
   <>
       <AppContainer>
           <Header/>
           <About/>
           <Firework top="30%" left="50%" size={200} color="red" duration={2} />
           <Firework top="70%" left="30%" size={150} color="green" duration={3} />
           <Firework top="60%" left="70%" size={100} color="blue" duration={1.5}/>
           <Firework top="20%" left="20%" size={120} color="#FFD700" duration={2.2}/>
           <Firework top="10%" left="90%" size={120} color="#FFD700" duration={1.7}/>
           <Firework top="80%" left="10%" size={120} color="#FFD700" duration={2.5}/>
      </AppContainer>
       
      <Projects/>
      <Skill/>
      <Footer/>
   </>
)

export default App;

