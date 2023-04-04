import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      "I'm the one who turns your coffee into JavaScript code.”
    </SectionText>

    <List>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            Next.js  <br />
            CSS/Sass/Tailwind <br />Github


          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js (Typescript)<br /> Databases (MongoDB,MySQL)<br />Api<br />Github<br />Prisma
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle> UI/UX</ListTitle>
          <ListParagraph>
            Github <br />
            Figma
            <br />
            3D Max
            <br />
            Miro


          </ListParagraph>
        </ListContainer>
      </ListItem>


    </List>
  </Section>
);

export default Technologies;
