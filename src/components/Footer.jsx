import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #fff;
  padding: 20px;

`;

const FooterSection = styled.div`
    margin-bottom :15 px ;

    h5{
        font-size :1.2 em ;
        margin-bottom :10 px ;
    }

    p, a {
        font-size :0.9 em ;
        color:#fff ; 
        text-decoration:none ; 
        margin-bottom :10 px ;

         &:last-child {
            margin-bottom :0 ;
         }
     }
`;

const BottomBarContainer = styled.div`
   text-align:center ;  
   font-size :0.8 em ; 
   padding-top :20 px ;

`;

const Footer = () => (
<FooterWrapper>
<FooterSection>
<h5>Contact Us</h5>
<p>1234 Street Name</p>
<p>City, State, Postal Code</p>
<a href="tel:+123456789">+1 (234) 567-890</a>
<a href="mailto:info@domain.com">info@domain.com</a>

{/* Social Icons */}
{/* Add your social icons here */}
 </FooterSection>

 {/* Bottom Bar */}
 <BottomBarContainer className="f4-bottom-bar">
 &copy; {new Date().getFullYear()} Your Company Name | All rights reserved.
 </BottomBarContainer>


 </FooterWrapper>


);

export default Footer;

