import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ children, ...props }) => {
  return (
    <CTag
      p={1}
      mb={1}
      mt={1}
      size="sm"
      variant="solid"
      fontSize={"8px"}
      textTransform="uppercase"
      color="black"
      borderRadius={2}
      {...props}
    >
      {children}
    </CTag>
  );
};