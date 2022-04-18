import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
<SectionDivider />
<br />
<SectionTitle>Technologies</SectionTitle>
<SectionText>
  I can work with a range a Technologies in the web development world. From Back-end To Design
</SectionText>
  
  <List>

    <ListItem>
      <DiReact  size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase  size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node.js <br /> Strapi <br /> Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiZend  size="3rem" />
      <ListContainer>
        <ListTitle> UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br />
         Tools using are Figma
         
        </ListParagraph>
      </ListContainer>
    </ListItem>


  </List>
  </Section>
);

export default Technologies;
