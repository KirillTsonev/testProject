import {StyledButton, StyledButtonText} from "./elements";
import {IChildren} from "~/utils";
import {FC} from "react";

export const Button: FC<{children?: IChildren; [x: string]: any}> = ({children, ...props}) => {
  return (
    <StyledButton {...props}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};
