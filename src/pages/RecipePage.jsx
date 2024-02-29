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
      cursor="pointer"
    >
      <CardBody>
        <Button onClick={handleBack} backgroundColor={"blue.300"}>
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

        <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="flex-start" mt="3">
          <Flex direction="column" flex="1">
            <VStack align="start" spacing="2">
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Meal type: {item.recipe.mealType}
              </Text>
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Dish type: {item.recipe.dishType}
              </Text>
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Total cooking time: {item.recipe.totalTime}
              </Text>
              <Text textTransform="uppercase" color="gray" fontSize="xs">
                Servings: {item.recipe.servings}
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
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
