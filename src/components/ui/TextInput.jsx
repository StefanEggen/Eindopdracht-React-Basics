import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
    bg={"gray.100"}  
    textColor={"green.600"}
    p={4}
      borderRadius="10px"
      border="1px solid #9ed2c6"
      fontSize={"16px"}
      placeholder="Search.."
      textAlign={"center"}
      onChange={changeFn}
      {...props}
    ></Input>
  );
};