
import React from 'react';
import TypeIt from "typeit-react";
import { FaBirthdayCake } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import {GoPerson,  GoHome, GoMail, GoMortarBoard, GoMarkGithub } from "react-icons/go";
import styled from 'styled-components';
import ai from '../img/ai.jpg';


function About() {
 return(
   <Section id="home">
    <br/><br/><br/><br/>
     <Div id="introduction" className="about-inner">
       <TypeItDiv className="typeit">
         <TypeIt options={{
           strings: ["안녕하세요 : ) <br/>주니어 Javascript 개발자 김예건입니다."],
           speed: 100,
           loop: true,
           loopDelay: [2500],
           waitUntilVisible: true,
         }}/>
       </TypeItDiv>
       <br/><br/>
        <P>안녕하세요, 저는 열정적인 자바스크립트 개발자입니다.</P>
        <P>저는 새로운 것을 배우는 것에 대한 열정과 함께 다재다능한 자바스크립트 언어에 매력을 느꼈습니다.</P>
        <P>저의 목표는 기술적 역량과 창조성을 결합하여 사람들이 일상에서 직면하는 문제를 해결하는 소프트웨어 솔루션을 개발하는 것입니다.</P>
        <P>이 과정에서 사용자 경험 향상과 생산성 증가를 위해 사용자 중심의 디자인 원칙이 적용됩니다.</P>
        <br/>
        <P>기술 트렌드가 지속적으로 발전하고 변화함에 따라 저 또한 계속 학습하여 최신 프레임워크와 도구를 익혀나갈 계획입니다.</P>
        <P>마지막으로, 협력적인 개발 문화를 추구하며 동료 개발자들과 지식 공유와 함께 성장하겠습니다.</P>
        <P> </P>
        
     </Div>


     <br/><br/><br/><br/>
    <CardContainer>
     <Div id="about" className="about-inner">
       <H2>ABOUT</H2>
       <ProfileContainer>
          <StyledImg src={ai} alt="My Description" />
       <StyledUl>
              <StyledLi><GoPerson/><StyledSpan>김예건</StyledSpan></StyledLi>
              <StyledLi><GoHome/><StyledSpan>1999. 12. 13</StyledSpan></StyledLi>
              <StyledLi><FaBirthdayCake/><StyledSpan>경기도 시흥시</StyledSpan></StyledLi>
              <StyledLi><GoMail/><StyledSpan>kimyegun123@gmail.com</StyledSpan></StyledLi>
              <StyledLi><GoMortarBoard/><StyledSpan>유한대학교 ( 3D프린팅공학과 )</StyledSpan></StyledLi>
            <br/>
            <StyledLi><StyledLink href="https://github.com/kimyegun" target="_blank" rel="noopener noreferrer"><GoMarkGithub/><StyledSpan>Git</StyledSpan></StyledLink></StyledLi>
            <StyledLi><StyledLink href="https://velog.io/@kimyegun" target="_blank" rel="noopener noreferrer"><SiBloglovin/><StyledSpan>BLOG</StyledSpan></StyledLink></StyledLi>
      </StyledUl>
         </ProfileContainer>
       </Div>
     </CardContainer>
   </Section>
 );
}

export default About;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const StyledSpan = styled.span`
  margin-left: 10px;

`;

const ProfileContainer = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const Section = styled.section`
  padding: 20px;
`;

const Div = styled.div`
  margin-bottom: 20px;
`;

const P = styled.p`
color: #666666;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  font-weight:bold;
  font-family: Arial, sans-serif;
`;

const H2 = styled.h2`
 font-size:24px;
 font-weight:bold;
 margin-bottom:10px;
 text-align: center; 
`;
const TypeItDiv = styled.div`
  color: #666666;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-family: Arial, sans-serif;
`;

const StyledImg = styled.img`
width: 250px;
height: auto;
border-radius: 50%;
margin-right: 80px;
`;

const CardContainer = styled.div`
  width: 70%; 
  margin: auto;
  border-radius: 15px;
  overflow: hidden;
  padding: 20px;
  position: relative;
  z-index: 1;
  
  background-color: #f8f9fa; // 배경색을 약간의 회색 계열로 변경합니다.
  
  box-shadow: 
    rgba(0,0,0,0.02) 1px -2px, 
    rgba(0,0,0,0.02) -1px -2px,
    rgba(255,255,255,.4) -1px -2px inset,
    rgba(255,255,255,.4) -1px -3px inset,
    rgba(23,43,99,.05) .25rem .5rem inset,
    rgba(23,43,99,.15) .125rem .0625rem .3125rem;
    
   transition: all .3s ease-in-out; // 모든 속성에 대해 변화를 부드럽게 만듭니다.

   &:hover { 
     transform: translateY(-10px); // 마우스 호버 시 카드를 약간 위로 이동시킵니다.
     box-shadow:
       rgba(50 ,50 ,93 ,.25) ,.0625rem .1875rem ,rgba (46 ,41 ,51 ,.08)
       -.0625rem -.1875rem inset;
   }

   & > * + * {
     margin-top: .375rem;
   }
`;
const StyledUl = styled.ul`
  text-align: left;
`;

const StyledLi = styled.li`
display: flex; 
justify-content: flex-start; // Flexbox를 이용하여 아이템들을 왼쪽에서부터 배치합니다.
align-items: center; // 세로축 중앙 정렬
margin-bottom: 7px; // 리스트 아이템 간의 하단 마진 설정
font-size: 16px; // 폰트 크기 설정
font-family: Arial, sans-serif; // 글꼴 설정. 원하는 글꼴로 변경 가능합니다.
`;