import {SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import Link from "next/link";

import {StyledButton} from "~/components/Button/elements";

import {StyledHeaderWrapper, StyledHeaderButtons} from "./elements";

export const Header = ({position}: {position: string}) => {
  return (
    <StyledHeaderWrapper position={position}>
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
        <StyledHeaderButtons>
          <Link href="/dashboard">
            <StyledButton
              variant="contained"
              color="main"
            >
              Dashboard
            </StyledButton>
          </Link>
          <UserButton />
        </StyledHeaderButtons>
      </SignedIn>
    </StyledHeaderWrapper>
  );
};
