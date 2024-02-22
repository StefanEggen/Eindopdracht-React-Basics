import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage"; // import the RecipePage component
import { Box, Heading } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(); // state to keep track of selected recipe

  const greeting = "Winc recipe search";

  // const handleRecipeSelection = (recipe) => {
  //   setSelectedRecipe(recipe); // update the selected recipe in state
  // };

  return (
    <Box>
      {selectedRecipe ? ( // conditionally render RecipePage or RecipeListPage
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <Heading
            textAlign="center"
            m={8}
            fontSize={["16px", "20px", "24px", "28px"]}
            color={"green.600"}
          >
            {greeting}
          </Heading>
          <RecipeListPage clickFn={setSelectedRecipe} />
        </>
      )}
    </Box>
  );
};
