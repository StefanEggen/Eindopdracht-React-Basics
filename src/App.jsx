import { useState } from "react";
import { data } from "./utils/data";
import { RecipePage } from "./pages/RecipePage";
import { RecipeSearch } from "./components/RecipeSearch";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(); // state to keep track of selected recipe

  return (
    <Box minH="100vh" bgColor="blue.200">
      {selectedRecipe ? ( // conditionally render RecipePage or RecipeListPage
        <RecipePage item={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeSearch items={data.hits} clickFn={setSelectedRecipe} />
      )}
    </Box>
  );
};
