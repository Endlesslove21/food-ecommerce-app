import React from "react";
import { Box, chakra, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { NavItemUnit } from "@/types/navItemUnit";
type SubNavItemProps = {
  label: string;
  navContentList: NavItemUnit["children"];
};
const Nav = chakra("nav");
const SubNavItem = ({ label, navContentList }: SubNavItemProps) => {
  return (
    <Box>
      <Link>{label}</Link>
      <Nav>
        <UnorderedList>
          {navContentList?.map((item) => (
            <ListItem>
              <Link>{item.label}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Nav>
    </Box>
  );
};

export default SubNavItem;
