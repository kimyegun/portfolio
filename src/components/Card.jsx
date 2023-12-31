import styled from 'styled-components';
import React, { useState } from "react";


const CardBack = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  height: 100%;
  backface-visibility:hidden;
`;

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
; 

`;
const DetailTitle = styled.h2`
    font-weight: bold;
    text-align: center;
    padding-bottom: 10px
`;

const DetailText = styled.p`
    font-family: Arial;
    font-size: 11px;
    color: #333; 
    line-height: 1.0; 
    padding: 3px;
    padding-top: 5px;
    padding-bottom: 5px;
 
`;


const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    transform-style: preserve-3d;

    width: 300px;  
    height: 300px; 

    transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
    transition: transform 0.6s;

     &:hover {
        box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, .4);
     }
`;

const CardFront = styled.div`
   position: relative;
   background-image:url(${props => props.ImgSrc});
   background-size :cover ;
   background-repeat :no-repeat ;
   background-position :center ;
   height: 100%;
   backface-visibility:hidden;
`;

const HoverMessage = styled.div`
     position:absolute;
     top :0 ;
     left :0 ;
     width :100% ;
     height :100% ;
     display:flex ;  
     justify-content:center ;  
     align-items:center ;  
     color:white;
     font-size:x-large ;
     z-index:1;

       ${CardContainer}:hover & {
           opacity:.7 ;
           background-color:black;
        }
`;

const TechTag = styled.span`
font-family: Arial;
font-size: 12px;
color: #333; 
line-height: 0.5; 
font-weight: bold;
padding-top: 7px;
padding-bottom: 7px;
`;

const TechContainer = styled.div`
   display:flex ;
   flex-wrap :wrap ;
`;

const SourceButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center; 
  color: #fff;
  background-color: #64D2D2;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
   transition : background-color .3s ease-in-out ;
   &:hover {
       background-color:#46B4B4;
   }
   box-shadow :0px2px4px rgba(0,0,0,.2);
`;

function Card ({proj}) {
  
  const [flipped, setFlipped] = useState(false);
 
  return (
          <CardContainer onClick={() => setFlipped(!flipped)} style={{ transformStyle:'preserve-3d', transition:'transform .6s'}}>
              {!flipped && (
                  <React.Fragment>
                      <HoverMessage>{proj.title}</HoverMessage>
                      <CardFront flipped={flipped} ImgSrc={proj.image}></CardFront>
                  </React.Fragment>
              )}
 
 {flipped && (
    <CardBack flipped={flipped}>
        <DetailContainer>
            <DetailTitle>{proj.title}</DetailTitle>
            <DetailText>{proj.detail}</DetailText>
            <TechTag># Peroid</TechTag>
            {proj.start && proj.end && <DetailText> {proj.start} ~ {proj.end}</DetailText>}
            <TechContainer>
                <TechTag># Tech:</TechTag>
                {proj.tech.map((tech, index) => 
                    <React.Fragment key={index}>
                        <DetailText>{tech}</DetailText>{index !== proj.tech.length - 1 && ' '}
                    </React.Fragment>
                )}
            </TechContainer>
            <TechTag># My work</TechTag>
            {proj.work.map((work, index) => 
                <DetailText key={index}>- {work}</DetailText>
            )}
            <SourceButton href={proj.source} target="_blank" rel="noopener noreferrer">Go to Source</SourceButton>
        </DetailContainer>
    </CardBack>
)}
          </CardContainer>
 
  );
 }
 
 export default Card;