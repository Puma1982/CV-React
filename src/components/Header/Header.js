import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillPhone } from 'react-icons/ai';
import { DiRedhat } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import Projects from './../Projects/Projects';
import Technologies from './../Technologies/Technologies';
import { SocialIconsContainer } from './../Footer/FooterStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'gold', marginBottom: '25px' }}>
          <DiRedhat size="8rem" /> <Span>Haithem Grissander</Span><br />
        </a>
      </Link>
    </Div1>
    <Div2>

      <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>
            Skills
          </NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>

      <SocialIcons href="https://github.com/Puma1982">
        <AiFillGithub size="6rem" color='white' />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/haithem-grissander-2715a022a/">
        <AiFillLinkedin size="6rem" color='gold' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
