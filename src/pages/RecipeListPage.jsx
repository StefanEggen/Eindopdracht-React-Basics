import { Center, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = ({ clickFn }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.ingredients[0].text);

  return (
    // <Center
    //   gap={8}
    //   minH="100vh"
    //   minWidth="100vh"
    //   flexDir="column"
    //   bgColor="gray.200"
    // >

    <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" gap={8} bgColor="gray.200">
      {data.hits.map((item) => (
        <RecipeItemCard clickFn={clickFn} item={item} key={item.recipe.label} />
      ))}

</Flex>
    // </Center>
  );
};
