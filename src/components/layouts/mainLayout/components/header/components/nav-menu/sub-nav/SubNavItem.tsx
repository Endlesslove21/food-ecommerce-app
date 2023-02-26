import {
  Box,
  Flex,
  Grid,
  GridItem,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { NavItemUnit } from "@/types/navItemUnit";
import { useMemo } from "react";
import Link from "@/components/elements/link";
type Props = {
  data: NavItemUnit[];
  isOpen?: boolean;
};

const SubNavItem = ({ data, isOpen }: Props) => {
  const isMultipleChildren = useMemo(() => {
    if (!!!data) return null;

    return data.some((item) => !!item.children);
  }, [data]);

  const renderItems = useMemo(
    () =>
      isMultipleChildren === null ? null : isMultipleChildren ? (
        <Grid templateColumns={"repeat(4, 1fr)"}>
          {data.map((rootItem) => (
            <GridItem>
              <Link to="/" listStyleType={"none"}>
                {rootItem.label}
              </Link>
              {rootItem.children && (
                <UnorderedList>
                  {rootItem.children.map((item) => (
                    <ListItem borderBottom="1px solid #ccc" py={2}>
                      <Link to="/" listStyleType={"none"}>
                        {item.label}
                      </Link>
                    </ListItem>
                  ))}
                </UnorderedList>
              )}
            </GridItem>
          ))}
        </Grid>
      ) : (
        data.map((rootItem) => (
          <Box borderBottom="1px solid #ccc" py={2}>
            <Link to="/" listStyleType={"none"}>
              {rootItem.label}
            </Link>
          </Box>
        ))
      ),
    [isMultipleChildren]
  );

  return (
    <Box
      bgColor={"white"}
      position="absolute"
      zIndex={isOpen ? 10 : -1}
      color={"second"}
    >
      {/* items */}
      {renderItems}
    </Box>
  );
};

export default SubNavItem;
