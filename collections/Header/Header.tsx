import {SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import Link from "next/link";

import {StyledButton} from "~/components/Button/elements";
import {HeaderWrapper} from "./elements";

export const Header = ({position}: {position: string}) => {
  return (
    <HeaderWrapper position={position}>
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
        <Link href="/dashboard">
          <StyledButton
            variant="contained"
            color="main"
          >
            Dashboard
          </StyledButton>
        </Link>
      </SignedIn>
    </HeaderWrapper>
  );
};
