import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/RecipeItems";

export const RecipeItemCard = ({ item, clickFn }) => {
  return (
    <Card
      key={item.recipe.label}
      backgroundColor={"gray.200"}
      mt={8}
      borderRadius="xl"
      w={{ base: "350px", md: "sm"}}
      h="500px"
      textAlign={"center"}
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image
        h={{ base: "200px", md: "250px" }}
        w="100%"
        objectFit="cover"
        borderRadius="xl"
        borderBottomRadius={0}
        src={item.recipe.image}
        alt={item.recipe.label}
      />
      <CardBody>
        <Stack mt={2} spacing={1}>
          <Heading size="md">{item.recipe.label}</Heading>
          <Text textTransform="uppercase" color="gray" fontSize="xs">
            {item.recipe.mealType}
          </Text>
          <Text textTransform="uppercase" color="gray" fontSize="xs">
            Dish type: {item.recipe.dishType}
          </Text>

          <Flex direction="column" wrap="wrap" mb="2">
            <Flex direction="row" wrap="wrap" justifyContent="center">
              {item.recipe.dietLabels.map((diet) => (
                <Tag bgColor="green.200" key={diet} mr="2">
                  {diet}
                </Tag>
              ))}
            </Flex>
          </Flex>
          <Flex direction="column" wrap="wrap">
            <Flex direction="row" wrap="wrap" justifyContent="center">
              {item.recipe.cautions.map((caution) => (
                <Tag bgColor="red.200" key={caution} mr="2">
                  {caution}
                </Tag>
              ))}
            </Flex>
          </Flex>
          <Flex direction="column" wrap="wrap" mb="2">
            <Flex direction="row" wrap="wrap" justifyContent="center">
              {item.recipe.healthLabels.includes("Vegan") && (
                <Tag bgColor="purple.200" mr="2">
                  Vegan
                </Tag>
              )}
              {item.recipe.healthLabels.includes("Vegetarian") && (
                <Tag bgColor="purple.200" mr="2">
                  Vegetarian
                </Tag>
              )}
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
