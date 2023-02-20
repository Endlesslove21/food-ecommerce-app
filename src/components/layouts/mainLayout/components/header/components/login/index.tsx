import { Icon, Text, Box, Button, Flex, Center } from "@chakra-ui/react";
import { IoPersonOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
type LoginProps = {};

const Login = (props: LoginProps) => {
  return (
    <Button fontWeight="350" ml={20} variant="unstyled">
      <Flex>
        <Center pr={3}>
          <Icon as={IoPersonOutline} boxSize={7} />
        </Center>

        <Flex flexDirection="column" fontSize="14px" textAlign="left">
          <Text>Đăng nhập / Đăng ký</Text>

          <Flex>
            <Text>Tài khoản của tôi</Text>
            <Center pr={1} pt={1}>
              <Icon as={BsChevronDown} boxSize={4} pl={1} />
            </Center>
          </Flex>
        </Flex>
      </Flex>
    </Button>
  );
};

export default Login;
