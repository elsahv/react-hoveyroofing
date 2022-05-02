import React from 'react';
import styled, { css } from 'styled-components/macro';
import {
  FaLinkedinIn,
  FaYelp
} from 'react-icons/fa';

const Section = styled.section`
  background: #000d1a;
  color: #fff;
  width: 100%;
  min-height: 200px;
  padding: 3rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;
 
 

const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #800000;
`;



const LinkedIn = styled(FaLinkedinIn)`
  ${Icons}
`;

 
const Yelp = styled(FaYelp)`
${Icons}

`

const Contact = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
     
          <SocialIcons>
            <a
             href='https://www.linkedin.com/in/glen-hovey-72362393'  
            >
              <LinkedIn />
            </a>
            <a
              href='https://www.yelp.com/biz/hovey-roofing-redlands'  
            >
              <Yelp />
            </a>

            <Contact>
                 
                <div>Copyright HoveyRoofing@ 2021</div>
                 
            
        
          </Contact>
        
                 
          </SocialIcons>
      
      </Container>
     
    </Section>
  );
};

export default Footer;
