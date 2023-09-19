
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
        <P>제가 프로그래밍에 처음 빠져든 것은 자바스크립트의 동적이고 유연한 특성에 매료되었기 때문입니다.</P>
        <P>그래서 저는 기술 스택과 프로그래밍 언어를 배우고 익히는 동시에, 그것들이 어떻게 실제 세상의 문제를 해결할 수 있는지, 어떻게 사용자 경험을 향상시킬 수 있는지 항상 고민하려 노력합니다.</P>
        <P>이 언어를 사용하면서 저는 문제 해결의 즐거움을 발견했습니다.</P>
        <br/>
        <P>그러나 시간이 지남에 따라 제 관심사는 단순히 문제를 해결하는 것에서 더 나아가, 어떻게 사람들의 삶을 향상시키고, 전체 사회에 긍정적인 변화를 가져오는지로 확장 되었습니다.</P>
        <P>적재적소에 알맞은 기술을 적용하여 최고의 UX를 제공할 수 있는</P>
        <P>프론트엔드 개발자가 되고 싶습니다.</P>
        
     </Div>


     <br/><br/><br/><br/>
    <CardContainer>
     <Div id="about" className="about-inner">
       <H2>ABOUT</H2>
       <ProfileContainer>
          <StyledImg src={ai} alt="My Description" />
       <StyledUl>
              <StyledLi><GoPerson/><span>김예건</span></StyledLi>
              <StyledLi><FaBirthdayCake/><span>1999. 12. 13</span></StyledLi>
              <StyledLi><GoHome/><span>경기도 시흥시</span></StyledLi>
              <StyledLi><GoMail/><span>kimyegun123@gmail.com</span></StyledLi>
              <StyledLi><GoMortarBoard/><span>유한대학교 ( 3D프린팅공학과 )</span></StyledLi>
            <br/>
              <StyledLi>
                <a href="https://github.com/kimyegun"><GoMarkGithub/><span>Git</span></a>
              </StyledLi>
              <StyledLi><a href="https://velog.io/@savinpark"><SiBloglovin/><span>BLOG</span></a></StyledLi>
            </StyledUl>
            </ProfileContainer>
       </Div>
     </CardContainer>
   </Section>
 );
}

export default About;


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
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

const H2 = styled.h2`
 font-size:24px;
 font-weight:bold;
 margin-bottom:10px;
 text-align: center; 
`;
const TypeItDiv = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
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
  border-radius: 15px; // 모서리를 둥글게 만듭니다.
  overflow: hidden; // 내부 컨텐츠가 넘칠 경우 숨깁니다.
  padding: 20px; // 내부 패딩을 적당히 주어 컨텐츠와 테두리 간에 공간을 만듭니다.
  
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