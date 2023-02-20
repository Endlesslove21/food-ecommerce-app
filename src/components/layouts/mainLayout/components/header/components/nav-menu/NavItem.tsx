import { useState } from "react";
import { ListItem, Link, Box } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavItemUnit } from "./NavList";

type NavItemProps = {
  item: NavItemUnit;
};

const NavItem = ({ item }: NavItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <ListItem
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      _hover={{
        _after: {
          content: '""',
          display: "block",
          height: "1px",
          width: "100%",
          bgColor: "primary",
          position: "relative",
          bottom: 0,
          left: 0,
          transformOrigin: "0%",
          transform: isHovering ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.4s ease-in-out",
        },
      }}
    >
      <Link
        display="block"
        _hover={{ textDecoration: "none" }}
        color="primary"
        fontWeight="extrabold"
        letterSpacing="0.75px"
        href={item.url}
        fontSize={14}
        py={15}
      >
        {item.label}
        <ChevronDownIcon
          transform={isHovering ? "rotate(180deg)" : ""}
          transition="all 0.3s ease"
          boxSize={5}
        />
      </Link>
      {/* sub-menu */}
      <Box></Box>
    </ListItem>
  );
};

export default NavItem;
