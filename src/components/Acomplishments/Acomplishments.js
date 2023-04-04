import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'React Projects'},
  { number: 7, text: 'Next.js(+TS)'},
  { number: 4, text: 'Front & Back end Project', },
  { number: 17, text: '10 Repositories in Github', },
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
