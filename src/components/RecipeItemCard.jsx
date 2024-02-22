import {
  Box,
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  //   Flex,
} from "@chakra-ui/react";
// import { Tag } from "./ui/PortfolioItemPage";

export const RecipeItemCard = ({ item, clickFn }) => {
  return (
    // <Card
    //   borderRadius="xl"
    //   w="sm"
    //   h="30rem"
    //   onClick={() => clickFn(item)}
    //   cursor="pointer"
    //   _hover={{ transform: "scale(1.05)" }}
    // >
    //   <CardBody>
    //     <Image
    //       h={64}
    //       w="sm"
    //       borderRadius="20px"
    //       src={item.recipe.image}
    //       alt={item.recipe.label}
    //     />
    //     <Stack mt="6" spacing="3">
    //       <Heading size="md" color={"green.600"}>
    //         {item.recipe.label}
    //       </Heading>
    //       <Text>Diet Label: {item.recipe.dietLabels.join(", ")}</Text>
    //       <Text>Cautions: {item.recipe.cautions.join(", ")}</Text>
    //       <Text>Meal Type: {item.recipe.mealType}</Text>
    //       <Text>Dish Type: {item.recipe.dishType}</Text>
    //       <Text>Health Labels: {item.recipe.healthLabels.join(", ")}</Text>
    //       {/* <Flex gap={2}>
    //         {item.skills.map((skill) => (
    //           <Tag key={skill}>{skill}</Tag>
    //         ))}
    //       </Flex> */}
    //     </Stack>
    //   </CardBody>
    // </Card>

    <Box
      key={item.recipe.label}
      p="4"
      m="4"
      borderRadius="xl"
      w="sm"
      h="40rem"
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Heading size="md" color={"green.600"}>
        {item.recipe.label}
      </Heading>
      <Image
        h={64}
        w="sm"
        mb={2}
        borderRadius="20px"
        src={item.recipe.image}
        alt={item.recipe.label}
      />
      <Text>Diet Label: {item.recipe.dietLabels.join(", ")}</Text>
      <Text>Cautions: {item.recipe.cautions.join(", ")}</Text>
      <Text>Meal Type: {item.recipe.mealType}</Text>
      <Text>Dish Type: {item.recipe.dishType}</Text>
      <Text>Health Labels: {item.recipe.healthLabels.includes('Vegan') ? 'Vegan' : ''} {item.recipe.healthLabels.includes('Vegetarian') ? 'Vegetarian' : ''}</Text>
    </Box>
  );
};
