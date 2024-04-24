import styled from "styled-components";

import {SectionContainer, SectionHeading, SectionSubheading} from "~/components";

export const StyledContainer = styled(({height, ...props}) => <SectionContainer {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeaderContainer = styled(({...props}) => <div {...props} />)`
  margin: auto;
  text-align: center;
  font-family: sans-serif;
`;

export const StyledHeading = styled((props) => <SectionHeading {...props} />)`
  margin-bottom: 0px;
  line-height: 3rem;
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const StyledSubheading = styled((props) => <SectionSubheading {...props} />)`
  margin-top: 0px;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;
