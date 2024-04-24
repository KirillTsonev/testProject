import {ThemeProvider} from "styled-components";
import {theme} from "~/styles";
import {FC} from "react";
import {IGenericProps} from "~/utils";

const MyApp: FC<{Component: FC; pageProps: IGenericProps}> = ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
