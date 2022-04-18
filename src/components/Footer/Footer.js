import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle> Call </LinkTitle>
      <LinkItem href="tel:+46-722-612-016">+46-722-612-016 </LinkItem>
      </LinkColumn>

      <LinkColumn>
      <LinkTitle> Email </LinkTitle>
      <LinkItem href="mailto:griss_hai2005@hotmail.com">griss_hai2005@hotmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Feel free to contact me</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Puma1982"> 
      <AiFillGithub size="3rem" color='gold'/></SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/haithem-grissander-2715a022a/"> 
      <AiFillLinkedin size="3rem" color='gold'/>
</SocialIcons>
      
      <SocialIcons href="https://www.linkedin.com/in/haithem-grissander-01092026/"> 
      <AiFillLinkedin size="3rem" color='gold'/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
