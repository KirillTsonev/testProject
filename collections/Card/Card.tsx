import Image from "next/image";

import {StyledCardHeading, StyledCardText, StyledCardTextContainer, StyledCardWrapper, StyledIconContainer} from "./elements";
import {ICardProps} from "~/utils";

export const Card = ({heading, desc, image, href, background, marginRight}: ICardProps) => {
  return (
    <StyledCardWrapper
      background={background}
      marginRight={marginRight}
    >
      <StyledIconContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={50}
          height={50}
        />
      </StyledIconContainer>
      <StyledCardTextContainer>
        <StyledCardHeading className="hoverHeading">{heading}</StyledCardHeading>
        <StyledCardText desc={desc}>{desc}</StyledCardText>
      </StyledCardTextContainer>
    </StyledCardWrapper>
  );
};
