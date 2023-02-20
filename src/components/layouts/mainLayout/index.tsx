import { Box } from "@chakra-ui/react";
import Contents from "./components/contents";
import Footer from "./components/footer";
import Header from "./components/header";

export type MainLayoutProps = React.PropsWithChildren<{}>;

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
