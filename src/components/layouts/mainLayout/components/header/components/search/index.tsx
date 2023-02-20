import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import CustomButton from "@/components/elements/button";
import { useState } from "react";
import SearchButton from "./SearchButton";

type Props = {};

const Search = (props: Props) => {
  const [isAdvancedSeek, setIsAdvanceSeek] = useState(true);
  return (
    <InputGroup maxWidth="630px">
      <Input
        focusBorderColor="primary"
        variant="outline"
        placeholder="Bạn đang tìm kiếm gì?"
      />
      ;
      <InputRightElement
        w="50"
        pr={1}
        children={
          isAdvancedSeek ? (
            <SearchButton handleClickSearchBtn={() => setIsAdvanceSeek(false)}>
              Tìm kiếm nâng cao
            </SearchButton>
          ) : (
            <SearchButton handleClickSearchBtn={() => setIsAdvanceSeek(true)}>
              X
            </SearchButton>
          )
        }
      />
    </InputGroup>
  );
};

export default Search;
