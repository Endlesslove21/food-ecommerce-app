import MainLayout from "@/components/layouts/mainLayout";
import Contents from "./contents";

type Props = {};

const Home = (props: Props) => {
  return (
    <MainLayout>
      <Contents />
    </MainLayout>
  );
};

export default Home;
