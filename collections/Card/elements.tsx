import styled from "styled-components";

export const StyledCardContainer = styled(({...props}) => <div {...props} />)`
  width: 300px;
  height: 300px;
  border: 1px green solid;
`;
