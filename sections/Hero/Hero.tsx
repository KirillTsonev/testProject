import Image from "next/image";
import {ISectionProps} from "~/utils";
import {FC} from "react";

import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
} from "./elements";

export const Hero: FC<ISectionProps> = ({image, title, description, ctaText, ...props}) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledCTAContainer>
          <StyledGetStartedBtn>{ctaText}</StyledGetStartedBtn>
        </StyledCTAContainer>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledImageContainer>
    </StyledContainer>
  );
};
