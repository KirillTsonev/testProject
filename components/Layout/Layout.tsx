import {FC} from "react";

import {Header} from "~/collections";

export const Layout: FC<{children: React.ReactElement[]}> = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
