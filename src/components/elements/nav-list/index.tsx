import { chakra, UnorderedList } from "@chakra-ui/react";
import { PropsWithchildren } from "react";
const Nav = chakra("nav");

type NavListProps = PropsWithchildren<{}>;

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
