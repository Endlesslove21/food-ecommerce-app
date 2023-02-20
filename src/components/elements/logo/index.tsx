import React from "react";
import { Box, Container, Link, Image, Grid } from "@chakra-ui/react";

type LogoProps = {
  source: any;
  alt: string;
};

const Logo = ({ source, alt }: LogoProps) => {
  return (
    <Box width="200px">
      <Link>
        <Image src={source} alt={alt} />
      </Link>
    </Box>
  );
};

export default Logo;
