import React from 'react';
import styled from 'styled-components';

const TechItem = styled.div`
   display:flex ;
   justify-content :space-between ;
   align-items:center ;
   margin-bottom :35px ; 
`;

const SkillName = styled.h5`
    font-size :1.5em ; 
    color:#333; 
    flex-basis: 20%;
`;

const ProgressBarContainer = styled.div`
width: 100%;
    background-color:#f3f3f3;
    border-radius:50px;
    margin-right: 10px;

   span{
       display:block;
       height:15px;
       border-radius:50px;
       background-color:#3498db; 
       width:${props => props.percentage ? props.percentage+'%' : '0'};
   }
`;

const ProgressText = styled.p`
  text-align:right;  
  font-size :1em ;
   flex-basis:10%;
`;

const MainSkillsTitle = styled.p`
   text-align:center ;
   font-size :2em ;
   color:#333 ;
`;


const techStacks = [    { name:'HTML5', proficiency:75},    { name:'CSS3', proficiency:75},    { name:'JavaScript', proficiency:75},    { name:'React.js', proficiency:80},    { name:'TypeScript', proficiency:80},    { name:'Next.js', proficiency:80},];

const TechStack = () => (
<>
<MainSkillsTitle id='skills'>Main Skills</MainSkillsTitle>

{techStacks.map((tech, index) => (
<TechItem key={index}>
<SkillName>{tech.name}</SkillName>
<ProgressBarContainer percentage={tech.proficiency}><span/></ProgressBarContainer>
<ProgressText>{tech.proficiency}%</ProgressText>
</TechItem>
))}

</>

);

export default TechStack;

