import NavList from "@/components/elements/nav-list";
import { NAV_LIST_DATA } from "@/configs/navListData";
import NavItem from "./NavItem";

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <NavList>
      {NAV_LIST_DATA.map((item, index) => (
        <NavItem item={item} key={item.label} />
      ))}
    </NavList>
  );
};

export default NavMenu;
