import { useState } from "react";
import { VStack, Heading } from "@chakra-ui/react";
import { RecipeListPage } from "../pages/RecipeListPage";
import { TextInput } from "./ui/TextInput";

export const RecipeSearch = ({ items, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = items.filter((recipe) => {
    return (
      recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
      recipe.recipe.healthLabels
        .join("")
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
  });

  return (
    <>
      <VStack spacing={4}>
        <Heading
          mt={8}
          textAlign="center"
          fontSize={{base: "16px", md: "28px"}}
          color={"white"}
          textTransform="uppercase"
          textShadow={"0px 4px 4px rgba(0, 0, 0)"}
        >
          Search for a delicious recipe
        </Heading>
        <TextInput changeFn={handleChange} w="60%" />
        <RecipeListPage clickFn={clickFn} items={matchedRecipes} />
      </VStack>
    </>
  );
};
