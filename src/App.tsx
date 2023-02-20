import "@fontsource/quicksand/400.css";
import MainLayout from "@/components/layouts/mainLayout";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/configs/theme";
import Contents from "@/components/layouts/mainLayout/components/contents";
// 2. Call `extendTheme` and pass your custom values

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Contents />
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
