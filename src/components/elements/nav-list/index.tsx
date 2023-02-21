import { chakra, UnorderedList } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
const Nav = chakra("nav");

type NavListProps = PropsWithChildren<{}>;

const NavList = ({ children, ...props }: NavListProps) => {
  return (
    <Nav {...props}>
      <UnorderedList
        justifyContent="space-around"
        listStyleType="none"
        display="flex"
      >
        {children}
      </UnorderedList>
    </Nav>
  );
};

export default NavList;
