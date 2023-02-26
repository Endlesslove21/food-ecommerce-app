import { Button, ButtonProps } from "@chakra-ui/react";
import React, { PropsWithchildren } from "react";

type SlidedButtonProps = PropsWithchildren<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> &
  ButtonProps;

const SlidedButton = ({ children, onClick, ...props }: SlidedButtonProps) => {
  return (
    <Button
      variant="unstyled"
      position={"absolute"}
      border="1px solid"
      borderColor="primary"
      borderRadius="none"
      _hover={{ bgColor: "white" }}
      onClick={onClick}
      bgColor="primary"
      {...props}
    >
      {children}
    </Button>
  );
};

export default SlidedButton;
