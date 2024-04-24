import Image from "next/image";

import {StyledCardHeading, StyledCardText, StyledCardTextContainer, StyledCardWrapper, StyledIconContainer} from "./elements";

export const Card = ({heading, desc, image, href, background, marginRight}) => {
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
