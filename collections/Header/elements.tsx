import styled from "styled-components";

export const HeaderWrapper = styled(({position, ...props}: {position: string}) => <header {...props} />)`
  position: ${({position}) => position};
  width: 100%;
  background: #f1f1f1;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;
