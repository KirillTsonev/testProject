import styled from "styled-components";

import {IGenericProps} from "~/utils";

export const StyledHeaderWrapper = styled(({...props}: IGenericProps) => <header {...props} />)`
  width: 100%;
  background: #f1f1f1;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

export const StyledHeaderButtons = styled(({...props}) => <div {...props} />)`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
`;
