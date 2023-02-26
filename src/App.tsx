import "@fontsource/quicksand/400.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/configs/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
