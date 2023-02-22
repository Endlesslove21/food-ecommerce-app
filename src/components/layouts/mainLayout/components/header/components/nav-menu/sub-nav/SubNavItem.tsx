import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { NavItemUnit } from "@/types/navItemUnit";
type Props = {
  data: NavItemUnit["children"];
};

const SubNavItem = ({ data }: Props) => {
  if (!!!data) return null;
  const isHasChildren = true;
  if (!isHasChildren) return null;
  return (
    <Box>
      {data.map((rootItem) => (
        <UnorderedList>
          {rootItem.children!.map((item) => (
            <ListItem>
              <Link>{item.label}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      ))}
    </Box>
  );
};

export default SubNavItem;
