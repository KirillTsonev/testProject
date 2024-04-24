/* eslint-disable react/display-name */
import {forwardRef} from "react";
import styled from "styled-components";
import {IGenericProps} from "~/utils";
import {LegacyRef} from "react";

export const StyledSectionBigHeading = styled(
  forwardRef((props, ref: LegacyRef<HTMLHeadingElement>) => (
    <h1
      {...props}
      ref={ref}
    />
  ))
)`
  font-family: Poppins;
  font-weight: 600;
  font-size: 3rem;
  line-height: 3.94rem;
`;

export const StyledSectionHeading = styled(
  forwardRef((props, ref: LegacyRef<HTMLHeadingElement>) => (
    <h2
      {...props}
      ref={ref}
    />
  ))
)`
  font-family: Poppins;
  font-size: 2.5rem;
  line-height: 4.375rem;
  font-weight: 600;
`;

export const StyledSectionSubheading = styled(
  forwardRef((props, ref: LegacyRef<HTMLHeadingElement>) => (
    <h3
      {...props}
      ref={ref}
    />
  ))
)`
  font-family: Poppins;
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 300;
`;

export const StyledSectionInnerHeading = styled(
  forwardRef((props, ref: LegacyRef<HTMLHeadingElement>) => (
    <h4
      {...props}
      ref={ref}
    />
  ))
)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
`;

export const StyledSectionTinyHeading = styled(
  forwardRef((props, ref: LegacyRef<HTMLHeadingElement>) => (
    <h5
      {...props}
      ref={ref}
    />
  ))
)`
  font-family: Poppins;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 300;
`;

export const StyledSectionParagraph = styled((props: IGenericProps) => <p {...props} />)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
`;
