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
  StyledCardsContainer,
} from "./elements";

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
        <StyledCardsContainer>
          {/* iterator in this case won't change, otherwise we'd use a unique ID */}
          {mockCardData.map((card, i) => (
            <Card
              key={i}
              heading={card.heading}
              desc={card.desc}
              image={card.image}
              href={card.href}
              background={card.background}
              marginRight={card.marginRight}
            />
          ))}
        </StyledCardsContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};
