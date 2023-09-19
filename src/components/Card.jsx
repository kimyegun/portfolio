import styled, { css } from 'styled-components';
import React, { useState } from "react";


const CardBack = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   position:absolute;
   top :0 ;
   left :0 ;
   
   padding: 20px; 
   
   background-color:#f8f9fa; 
   
    transform:${props => props.flipped ? 'rotateY(0deg)' : 'rotateY(-180deg)'};
    backface-visibility:hidden;

    width:'100%';
    height:'100%';
`;

const DetailTitle = styled.h2`
    
    text-align: center;
`;

const DetailText = styled.p`
    text-align: justify;
    font-size: 13px;
    color: #333; 
    line-height: 1.6; 
    

    &:first-letter { 
        font-size: 1.5em;
        color: #0088cc;
        float: left;
        padding-right: 5px;
        font-weight:bold;
    }

   &:nth-child(odd) { 
       background-color:#f8f9fa;
       border-radius :10px ;
       
   }
`;

const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;

    width: 300px;  
    height: 300px; 

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

   transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};

`;

const Info = styled.div`
   padding :20px ; 
`;

const Title = styled.h3`
 font-size :1.5 em ; 
 margin-bottom :10 px ; 
 color:#333333 ;
`;


// Add a new component for the hover message
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

function Card ({proj}) {
  
  const [flipped, setFlipped] = useState(false);
 
  return (
          <CardContainer onClick={() => setFlipped(!flipped)} style={{ transformStyle:'preserve-3d', transition:'transform .6s'}}>
              {!flipped && (
                  <React.Fragment>
                      <HoverMessage>Click to see more details</HoverMessage>
                      <CardFront flipped={flipped} ImgSrc={proj.image}>
                      <Info>
                              <Title>{proj.title}</Title>
                              {/* Continue with other components */}
                          </Info>
                      </CardFront>
                  </React.Fragment>
              )}
 
              {flipped && (
                  <CardBack flipped={flipped}>
                      <DetailTitle>{proj.title}</DetailTitle>
                      <DetailText>{proj.detail}</DetailText>
                      <DetailText>{proj.start}</DetailText>
                      <DetailText>{proj.end}</DetailText>
                      <DetailText>{proj.tech}</DetailText>
                      <DetailText>{proj.work}</DetailText>
                      <DetailText>{proj.source}</DetailText>
                  </CardBack>
              )}
          </CardContainer>
 
  );
 }
 
 export default Card;