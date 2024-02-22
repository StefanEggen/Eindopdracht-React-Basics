import { useState } from "react";
import { Text } from "@chakra-ui/react";
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
      <Text fontSize={["12px", "16px", "20px", "24px"]} color={"green.500"}>
        Search for a delicious recipe:
      </Text>
      <TextInput changeFn={handleChange} w="60%" mb={8} />
      <RecipeListPage clickFn={clickFn} items={matchedRecipes} />
    </>
  );
};
