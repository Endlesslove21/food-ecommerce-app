import { Box, Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { NavItemUnit } from "@/types/navItemUnit";
type Props = {
  data: NavItemUnit[];
};

const SubNavItem = ({ data }: Props) => {
  return (
    <Box
      width="100%"
      bgColor={"white"}
      position="absolute"
      left="0"
      zIndex="10"
      color={"second"}
    >
      {data.map((rootItem) =>
        rootItem.children ? (
          <Box>
            <Link listStyleType={"none"}>{rootItem.label}</Link>

            <UnorderedList>
              {rootItem.children.map((item) => (
                <ListItem borderBottom="1px solid #ccc" py={2}>
                  <Link listStyleType={"none"}>{item.label}</Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        ) : (
          <Box borderBottom="1px solid #ccc" py={2}>
            <Link listStyleType={"none"}>{rootItem.label}</Link>
          </Box>
        )
      )}
    </Box>
  );
};

export default SubNavItem;
