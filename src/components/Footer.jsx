import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const FooterWrapper = styled.footer`
    display:flex ;
    flex-direction :column ;
    align-items:center ;
    justify-content:center ;

   
   animation:${slideUp} ease-in-out ;  
   animation-duration :2s ;
`;


const BottomBarContainer = styled.div`
   text-align:center ;  
   font-size :0.8em ; 
   padding-top :20px ;

`;


const Footer = () => (
<FooterWrapper>

 <BottomBarContainer className="f4-bottom-bar">
 &copy; {new Date().getFullYear()} KimYeGun | All rights reserved.
 </BottomBarContainer>

 </FooterWrapper>


);

export default Footer;

