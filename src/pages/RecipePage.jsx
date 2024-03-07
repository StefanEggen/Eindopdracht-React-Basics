import {
  Card,
  Image,
  CardBody,
  VStack,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/RecipeItems";

export const RecipePage = ({ item, clickFn }) => {
  const handleBack = () => {
    clickFn(null); // Setting selectedRecipe to null to return to recipes overview
  };

  return (
    <Card
      backgroundColor={"gray.100"}
      m={"auto"}
      w={{ base: "90%", md: "50%" }}
      h="full"
    >
      <CardBody>
        <Button
          onClick={handleBack}
          backgroundColor={"blue.300"}
          color={"white"}
          _hover={{ backgroundColor: "blue.400" }}
        >
          Back
        </Button>
        <Image
          src={item.recipe.image}
          m={"auto"}
          h={{ base: "auto", md: 64 }}
          w={{ base: "90%", md: "sm" }}
          borderRadius="20px"
          objectFit="cover"
          mt="3"
        />

        <Heading textAlign="center" size="lg" m={4}>
          {item.recipe.label}
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="flex-start"
          mt="3"
        >
          <Flex direction="column" flex="1">
            <VStack align="start" spacing="2">
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Meal type: {item.recipe.mealType}
              </Text>
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Dish type: {item.recipe.dishType}
              </Text>
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Total cooking time: {item.recipe.totalTime} minutes
              </Text>
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Servings: {item.recipe.yield}
              </Text>
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Ingredients:{" "}
              </Text>
              {item.recipe.ingredientLines.map((ingredient) => (
                <Tag key={ingredient} bgColor="yellow.200">
                  {ingredient}
                </Tag>
              ))}
            </VStack>
          </Flex>

          <Flex direction="column" flex="1" justify="flex-start">
            <Flex direction="column" wrap="wrap" mb="2">
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Health Labels:
              </Text>
              <Flex direction="row" wrap="wrap">
                {item.recipe.healthLabels.map((health) => (
                  <Tag bgColor="purple.200" key={health} mr="2">
                    {health}
                  </Tag>
                ))}
              </Flex>
            </Flex>
            <Flex direction="column" wrap="wrap" mb="2">
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Diet labels:
              </Text>
              <Flex direction="row" wrap="wrap">
                {item.recipe.dietLabels.map((diet) => (
                  <Tag bgColor="green.200" key={diet} mr="2">
                    {diet}
                  </Tag>
                ))}
              </Flex>
            </Flex>
            <Flex direction="column" wrap="wrap">
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Cautions:
              </Text>
              <Flex direction="row" wrap="wrap">
                {item.recipe.cautions.map((caution) => (
                  <Tag bgColor="red.200" key={caution} mr="2">
                    {caution}
                  </Tag>
                ))}
              </Flex>
            </Flex>
            <Flex direction="column" mt="4">
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Total Nutrients:
              </Text>
              <Flex direction="row" wrap="wrap" fontSize="xs">
                <Text mr={4}>
                  Energy:{" "}
                  {Math.round(item.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
                  {item.recipe.totalNutrients.ENERC_KCAL.unit}
                </Text>
                <Text mr={4}>
                  Protein:{" "}
                  {Math.round(item.recipe.totalNutrients.PROCNT.quantity)}{" "}
                  {item.recipe.totalNutrients.PROCNT.unit}
                </Text>
                <Text mr={4}>
                  Fat: {Math.round(item.recipe.totalNutrients.FAT.quantity)}{" "}
                  {item.recipe.totalNutrients.FAT.unit}
                </Text>
                <Text mr={4}>
                  Carbs:{" "}
                  {Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}{" "}
                  {item.recipe.totalNutrients.CHOCDF.unit}
                </Text>
                <Text mr={4}>
                  Cholesterol:{" "}
                  {Math.round(item.recipe.totalNutrients.CHOLE.quantity)}{" "}
                  {item.recipe.totalNutrients.CHOLE.unit}
                </Text>
                <Text mr={4}>
                  Sodium: {Math.round(item.recipe.totalNutrients.NA.quantity)}{" "}
                  {item.recipe.totalNutrients.NA.unit}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
