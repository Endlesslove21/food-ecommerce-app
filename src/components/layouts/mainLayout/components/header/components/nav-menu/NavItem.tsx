import { useState } from "react";
import { ListItem, Link, Box, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavItemUnit } from "@/types/navItemUnit";
import SubNavItem from "./sub-nav/SubNavItem";
import { NAV_LIST_DATA } from "@/configs/navListData";

type NavItemProps = {
  data: NavItemUnit;
};

const NavItem = ({ data }: NavItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <ListItem
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      position="relative"
      _after={{
        content: '""',
        display: "block",
        height: "2px",
        width: "0",
        bgColor: "primary",
        position: "absolute",
        bottom: 0,
        opacity: 0,
        left: 0,
        transition: "all .5s ",
      }}
      _hover={{
        _after: {
          width: "100%",
          opacity: 1,
        },
      }}
    >
      <Link
        display="block"
        _hover={{ textDecoration: "none" }}
        color="primary"
        position="relative"
        fontWeight="extrabold"
        letterSpacing="0.75px"
        href={data.url}
        fontSize={14}
        py={15}
      >
        {data.label}

        <ChevronDownIcon
          transform={isHovering ? "rotate(180deg)" : ""}
          transition="all 0.3s ease"
          boxSize={5}
        />
      </Link>

      {/* sub-menu */}
      {isHovering ? !!data.children && <SubNavItem data={data.children} /> : ""}
    </ListItem>
  );
};
export default NavItem;
