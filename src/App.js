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

const StyledDiv = styled.div`
  border: 1px solid #ccc;
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

const App = () => (
   <>
       <AppContainer>
           <Header/>
           <About/>
           <Firework top="30%" left="50%" size={200} color="#FFDEE9" duration={2} />
           <Firework top="70%" left="30%" size={150} color="#A5FFE4" duration={3} />
           <Firework top="60%" left="70%" size={100} color="#C8FFFF" duration={1.9}/>
           <Firework top="15%" left="10%" size={160} color="#FFDBC1" duration={2}/>
           <Firework top="10%" left="90%" size={130} color="#C8FAC8	" duration={1.7}/>
           <Firework top="80%" left="10%" size={125} color="#FFFF96" duration={2.5}/>
           <Firework top="1%" left="70%" size={200} color="#FFDEE9" duration={2} />
           <Firework top="40%" left="20%" size={100} color="#FEBEBE" duration={3} />
           <Firework top="70%" left="30%" size={120} color="#91B9F5" duration={1.5}/>
           <Firework top="55%" left="80%" size={140} color="#FFDBC1" duration={2.2}/>
           <Firework top="20%" left="80%" size={110} color="#C8FAC8	" duration={1.4}/>
           <Firework top="60%" left="90%" size={150} color="#CBFF75" duration={2.7}/>
           <Firework top="30%" left="50%" size={180} color="#FFDEE9" duration={1.8} />
           <Firework top="70%" left="75%" size={130} color="#A5FFE4" duration={2.7} />
           <Firework top="85%" left="35%" size={120} color="#C8FFFF" duration={1.8}/>
           <Firework top="50%" left="60%" size={140} color="#FFDBC1" duration={2.4}/>
           <Firework top="90%" left="70%" size={110} color="#B4B4DC" duration={1.7}/>
           <Firework top="44%" left="4%" size={100} color="#FFDEE9" duration={2.5}/>
           <Firework top="7%" left="77%" size={200} color="#FFDEE9" duration={2} />
           <Firework top="95%" left="95%" size={100} color="#FEBEBE" duration={3} />
           <Firework top="35%" left="65%" size={120} color="#91B9F5" duration={1.7}/>
           <Firework top="75%" left="40%" size={140} color="#FFDBC1" duration={2.2}/>
           <Firework top="25%" left="15%" size={110} color="#C8FAC8	" duration={1.6}/>
           <Firework top="45%" left="85%" size={150} color="#CBFF75" duration={2.7}/>
      
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30vh'
    }}>
      <StyledDiv/>
    </div>
      <Projects/>
      
      <CenteredDiv>
        <StyledDiv/>
      </CenteredDiv>
      <Skill/>
      </AppContainer>
      <CenteredDiv/>

      <Footer/>
   </>
)

export default App;

