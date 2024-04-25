"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";

import {StyledButton} from "~/components/Button/elements";

import {StyledHeaderWrapper, StyledHeaderButtons} from "./elements";

export const Header = ({position}: {position: string}) => {
  const pathname = usePathname();

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
          <Link href={pathname === "/dashboard" ? "/" : "/dashboard"}>
            <StyledButton
              variant="contained"
              color="main"
            >
              {pathname === "/dashboard" ? "Home" : "Dashboard"}
            </StyledButton>
          </Link>
          <UserButton />
        </StyledHeaderButtons>
      </SignedIn>
    </StyledHeaderWrapper>
  );
};
