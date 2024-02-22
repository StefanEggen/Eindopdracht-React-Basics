import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      mt={4}
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