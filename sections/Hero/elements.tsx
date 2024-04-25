import styled from "styled-components";

import {SectionBigHeading} from "~/components/Typography/SectionBigHeading";
import {SectionContainer} from "~/components/Containers/SectionContainer";
import {Button} from "~/components/Button/Button";
import {SectionSubheading} from "~/components/Typography/SectionSubheading";
// import {Button, SectionContainer, SectionBigHeading, SectionSubheading} from "~/components";
import {IGenericProps} from "~/utils";

export const StyledContainer = styled(({height, ...props}: {height: string; props: IGenericProps}) => <SectionContainer {...props} />)`
  align-items: center;
`;

export const StyledGetStartedBtn = styled((props: IGenericProps) => (
  <Button
    {...props}
    variant="contained"
    color="main"
  />
))`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props: IGenericProps) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props: IGenericProps) => <SectionSubheading {...props} />)`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({...props}) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
`;

export const StyledCTAContainer = styled(({...props}) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({...props}) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;
