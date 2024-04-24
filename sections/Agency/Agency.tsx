import {Card} from "~/collections";
import {StyledContainer, StyledHeaderContainer, StyledHeading, StyledSubheading} from "./elements";

export const Agency = ({title, description}) => {
  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledHeading>{title}</StyledHeading>
        <StyledSubheading>{description}</StyledSubheading>
      </StyledHeaderContainer>
      {/* <Card></Card> */}
    </StyledContainer>
  );
};
