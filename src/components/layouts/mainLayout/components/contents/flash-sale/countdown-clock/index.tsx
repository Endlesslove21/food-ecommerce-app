import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Flex, Center, Square } from "@chakra-ui/react";

interface CountdownClockProps {
  targetDate: Date;
}

const CountdownClock: React.FC<CountdownClockProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(() =>
    Math.max(targetDate.getTime() - new Date().getTime(), 0)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(
        Math.max(targetDate.getTime() - new Date().getTime(), 0)
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);

  return (
    <Flex justifyContent="center" ml="5">
      <Box bgColor="cherry" mr={2} color="white" p={2} textAlign="center">
        <Text fontSize="16px">{days}</Text>
        <Text fontSize="8px">Ngày</Text>
      </Box>
      <Box bgColor="cherry" mr={2} color="white" p={2} textAlign="center">
        <Text fontSize="16px">{hours}</Text>
        <Text fontSize="8px">Giờ</Text>
      </Box>
      <Box bgColor="cherry" mr={2} color="white" p={2} textAlign="center">
        <Text fontSize="16px">{minutes}</Text>
        <Text fontSize="8px">Phút</Text>
      </Box>
      <Box bgColor="cherry" color="white" p={2} textAlign="center">
        <Text fontSize="16px">{seconds}</Text>
        <Text fontSize="8px">Giây</Text>
      </Box>
    </Flex>
  );
};

export default CountdownClock;
