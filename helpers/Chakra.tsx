/** @format */

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";

export function Chakra({ cookies, children }: any) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}


export function getServerSideProps({ req }: any) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
