import { Flex } from "@chakra-ui/react";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = ({ items, clickFn }) => {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={6}
    >
      {items.map((item) => (
        <RecipeItemCard clickFn={clickFn} item={item} key={item.recipe.label} />
      ))}
    </Flex>
  );
};
