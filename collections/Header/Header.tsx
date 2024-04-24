import {SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";

import {StyledButton} from "~/components/Button/elements";
import {HeaderWrapper} from "./elements";

export const Header = () => {
  return (
    <HeaderWrapper>
      <SignedOut>
        <SignInButton>
          <StyledButton
            variant="contained"
            color="main"
          >
            Login
          </StyledButton>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </HeaderWrapper>
  );
};
