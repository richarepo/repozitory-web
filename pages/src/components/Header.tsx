/** @format */
import Image from "next/image";
import { HamburgerIcon, CloseIcon, } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import RepozitoryLogo from "../../../assets/logo/header_logo.png";
import useColorManager from "../../../helpers/hooks/useColorManager";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const {WHITE_TO_BLACK}=useColorManager()

  return (
    <Box position="fixed" top="0px" zIndex={999999}>
      <Flex
        bg={WHITE_TO_BLACK}
        color={useColorModeValue("gray.600", "white")}
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        align={"center"}
        position={"fixed"}
        width={"100%"}
        top={"0px"}
        padding={"0px 5%"}
        zIndex={999999}
      >

        <Link href='/'><Image src={RepozitoryLogo} layout="intrinsic" alt="repozitory" /></Link>
        <Flex
          display={{ base: "flex", }}
          flex={{ base: 1 }}
          justify={{ base: "end", }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon display={"none"} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>
      {isOpen && <Box transition={"all 0.9s ease"} transitionDuration="2.1s"><DrawerExample closeDrawer={onToggle} /></Box>}
    </Box>
  );
}


interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Services",
    href: '/#services'
  },
  {
    label: "Blogs",
    href: "/blog",
  },
  {
    label: "Contact us",
    href: "/#contact_us",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];


const DrawerExample = ({ closeDrawer }: any) => {
  return (
    <Box
      display={"flex"}
      position={"fixed"}
      right={"50px"}
      top={"1px"}
      padding={"15px"}
      zIndex={9999999}
      // boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      alignItems={"center"}
      transition={"all 0.9s ease"}
      transitionDuration="2.1s"
    >
      {NAV_ITEMS.map((obj: any) => {
        return (
          <Link key={obj.label} py={2} href={obj.href}>
            <Box key={obj.label} padding={"0px 15px"} cursor={"pointer"}>{obj.label}</Box>
          </Link>
        )
      })}
      <IconButton onClick={() => closeDrawer()}
        aria-label={"Toggle Navigation"}>
        <CloseIcon w={3} h={3} />
      </IconButton>
    </Box>
  );
}

