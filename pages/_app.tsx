import {ThemeProvider} from "styled-components";
import {FC} from "react";
import {ClerkProvider} from "@clerk/nextjs";

import {IGenericProps} from "~/utils";
import {theme} from "~/styles";
import "~/styles/globals.css";

const MyApp: FC<{Component: FC; pageProps: IGenericProps}> = ({Component, pageProps}) => {
  return (
    <ClerkProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default MyApp;
