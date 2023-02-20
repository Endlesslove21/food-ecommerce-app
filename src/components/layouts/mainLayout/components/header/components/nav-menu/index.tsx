import NavList from "./NavList";
import { NAV_LIST_DATA } from "@/configs/navListData";

type Props = {};

const NavMenu = (props: Props) => {
  return <NavList navListData={NAV_LIST_DATA} />;
};

export default NavMenu;
