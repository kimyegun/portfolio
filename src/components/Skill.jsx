import React from 'react';
import styled from 'styled-components';

const TechItem = styled.div`
   display:flex ;
   justify-content:flex-start ;
   align-items:center ;
   margin-bottom :35px ; 
`;

const SkillName = styled.h5`
    font-size :1.5em ; 
    color:#666666; 
    flex-basis: 20%;
    margin-left: 300px; 
    font-family: Arial, sans-serif;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color:#f3f3f3;
  border-radius:50px;
  margin-right: 25px;
  z-index: 1;

   span{
       display:flex;
       justify-content:center;
       align-items:center;
       height:30px;
       border-radius:50px;
       background: linear-gradient(to right, #FFB6C1, #ADD8E6);
       width:${props => props.percentage ? props.percentage+'%' : '0'};
       
        p {
            color:white ;
            visibility:${props => props.percentage > 20 ? 'visible' : 'hidden'};
        }
        box-shadow:0px 10px 15px rgba(0,0,0,.2);
   }
`;

const ProgressText = styled.p`
  text-align:left;  
  font-size :1em ;
  flex-basis:10%;
  margin-right:150px;  
font-family:Arial,sans-serif ;  
color:#666666 ;

`;

const MainSkillsTitle = styled.p`
text-align:center ;  
font-size :40px ;  
color:#66666 ;  
font-family:Arial ;


`;

const EnterDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 5vh;

`;


const techStacks=[{name:'HTML5',proficiency:80},{name:'CSS3',proficiency:75},{name:'JavaScript',proficiency:75}, {name:'React.js',proficiency:70}, {name:'Styled Component',proficiency:70}, {name:'TypeScript',proficiency:30},{name:'Next.js',proficiency:30},{name:'Node.js', proficiency:70}, { name:'express', proficiency :60}, { name :'Mysql', proficiency :60}, { name :'Github', proficiency :80}];



const TechStack=()=>(
<>
<MainSkillsTitle id='skills'>Main Skills</MainSkillsTitle>
<EnterDiv/>
{techStacks.map((tech,index)=>(
<TechItem key={index}>
<SkillName>{tech.name}</SkillName>
<ProgressBarContainer percentage={tech.proficiency}><span><p>{tech.proficiency}%</p></span></ProgressBarContainer>
<ProgressText></ProgressText>
</TechItem>
))}

</>

);

export default TechStack;
