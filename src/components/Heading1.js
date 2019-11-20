import styled from 'styled-components';

export const Heading1 = styled.h1`
  display: block;
  max-width: 25em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;
  font-size: 54px;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 849px) {
    overflow: hidden;

    font-size: 35px;
  }
`;
