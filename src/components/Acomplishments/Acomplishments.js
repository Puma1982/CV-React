import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'React Projects'},
  { number: 1, text: 'Front & Back end Project', },
  { number: 10, text: '10 Repositories in Github', },
  { number: 5, text: 'JavaScrit + CSS + HTML5', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
      <Box key={index}>
<BoxNum>{card.number}+</BoxNum>
<BoxText>{card.text}</BoxText>
      </Box>
       ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
