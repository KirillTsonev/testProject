import styled from "styled-components";

import {SectionContainer, SectionHeading, SectionSubheading} from "~/components";
import {IGenericProps} from "~/utils";

export const StyledContainer = styled(({height, ...props}: {height: string; props: IGenericProps}) => <SectionContainer {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledHeaderContainer = styled(({...props}) => <div {...props} />)`
  margin: auto;
  text-align: center;
  font-family: sans-serif;
`;

export const StyledHeading = styled((props: IGenericProps) => <SectionHeading {...props} />)`
  margin-bottom: 0px;
  line-height: 3rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const StyledSubheading = styled((props: IGenericProps) => <SectionSubheading {...props} />)`
  margin-top: 0px;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const StyledContentContainer = styled(({backgroundUrl = "", ...props}) => <div {...props} />)`
  max-width: 1200px;
  width: 100%;
  margin-top: 2rem;
  background: url(${({backgroundUrl}) => backgroundUrl}) no-repeat;
  background-size: contain;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledImageContainer = styled(({...props}) => <div {...props} />)`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledCardsContainer = styled(({...props}) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
