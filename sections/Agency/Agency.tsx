import Image from "next/image";
import {FC} from "react";

import {Card} from "~/collections";
import {
  StyledContainer,
  StyledHeaderContainer,
  StyledHeading,
  StyledSubheading,
  StyledContentContainer,
  StyledImageContainer,
} from "./elements";
import {StyledCardContainer} from "~/collections/Card/elements";
import {mockCardData, ISectionProps} from "~/utils";

export const Agency: FC<ISectionProps> = ({title, description, backgroundUrl, image, ...props}) => {
  return (
    <StyledContainer {...props}>
      <StyledHeaderContainer>
        <StyledHeading>{title}</StyledHeading>
        <StyledSubheading>{description}</StyledSubheading>
      </StyledHeaderContainer>
      <StyledContentContainer backgroundUrl={backgroundUrl}>
        <StyledImageContainer>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <StyledCardContainer>
          {/* iterator in this case won't change, otherwise we'd use a unique ID */}
          {mockCardData.map((card, i) => (
            <Card key={i}></Card>
          ))}
        </StyledCardContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};
