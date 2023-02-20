import { chakra, UnorderedList } from "@chakra-ui/react";

import NavItem from "./NavItem";

const Nav = chakra("nav");
export type NavItemUnit = {
  label: string;
  url?: string;
  children?: NavItemUnit[];
};

export type NavListProps = {
  navListData: NavItemUnit[];
};

const NavList = ({ navListData, ...props }: NavListProps) => {
  return (
    <Nav {...props}>
      <UnorderedList
        justifyContent="space-around"
        listStyleType="none"
        display="flex"
      >
        {navListData.map((item, index) => {
          return <NavItem item={item} />;
        })}
      </UnorderedList>
    </Nav>
  );
};

export default NavList;
