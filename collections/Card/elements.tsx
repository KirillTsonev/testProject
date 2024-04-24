import styled from "styled-components";
import Link from "next/link";

import {makeBold} from "~/utils";

export const StyledCardWrapper = styled(({background, marginRight, ...props}: {background: string; marginRight: string}) => (
  <div {...props} />
))`
  display: flex;
  align-items: center;
  background: ${({background}) => background};
  padding: 10px 30px;
  max-width: 100%;
  border-radius: 5px;
  margin-right: ${({marginRight}) => marginRight};

  &:hover {
    outline: 2px solid #006efd;
  }

  &:hover .hoverHeading {
    color: #006efd;
    text-decoration: underline;
  }
`;

export const StyledIconContainer = styled(({...props}) => <div {...props} />)`
  max-width: 3.25rem;
  max-height: 3.25rem;
  width: 100%;
  height: 100%;
  padding-right: 30px;
`;

export const StyledCardTextContainer = styled(({...props}) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Poppins;
`;

export const StyledCardHeading = styled(({hrefLink, ...props}: {hrefLink: string}) => (
  <Link
    href={hrefLink}
    target={hrefLink === "#" ? "" : "_blank"}
    rel={hrefLink === "#" ? "" : "noopener noreferrer"}
    style={{color: "black", textDecoration: "none"}}
  >
    <h2 {...props} />
  </Link>
))`
  font-size: 1.25rem;
  margin: 0;
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const StyledCardText = styled(({desc, ...props}: {desc: string}) => <p {...props}>{makeBold(desc)}</p>)`
  font-size: 1rem;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 0.75rem;
  }
`;
