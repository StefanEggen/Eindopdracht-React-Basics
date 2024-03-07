import { Flex } from "@chakra-ui/react";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = ({ items, clickFn }) => {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="center"
      gap={1}
    >
      {items.map((item) => (
        <RecipeItemCard clickFn={clickFn} item={item} key={item.recipe.label} />
      ))}
    </Flex>
  );
};
