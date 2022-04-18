import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
Welcome To <br />
My Personal CV
     </SectionTitle>

     <SectionText>
     Creates websites and applications using web languages such as HTML, CSS, and JavaScript  
     allow users to access and interact with the site or app. When you visit a website, the design 
     elements you see were created by me.
Contrast this with back-end developers, who work to develop the behind-the-scenes portions of a website 
or application, like data storage, security, site performance, or other server-side functions.
What I can do? 
Create the user interface (UI) that determines what each part of a site or application does and how it will look.
If someone wants to build a website, for example, they might hire me to create the site's layout. 
Like front-end developer I can determines where to place images, what the navigation should look like, and how to present the site. Much of my work involves ensuring the appearance and layout of the site or application is easy to navigate and intuitive for the user.
 </SectionText>
 <Button onClick={() => window.location = 'https://www.linkedin.com/in/haithem-grissander-2715a022a/'}>More About Me</Button>
</LeftSection>
</Section>
);

export default Hero;