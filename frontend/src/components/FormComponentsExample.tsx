import {
  Box,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { DatePicker } from "components/DatePicker";
import { Dropdown } from "components/Dropdown";

export const FormComponentsExample = () => {
  return (
    <>
      <Heading size="sm" as="h2" mb={8}>
        Components
      </Heading>
      <VStack spacing={8} alignItems="flex-start" maxWidth="400px">
        <Box w="100%">
          <Heading as="h3" size="xs">
            Basic Input
          </Heading>
          <FormControl>
            <FormLabel>Test Label</FormLabel>
            <Input placeholder="Basic Input" />
          </FormControl>
        </Box>
        <Box w="100%">
          <Heading as="h3" size="xs">
            Number Input
          </Heading>
          <FormControl>
            <FormLabel>Test Label</FormLabel>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Box>

        <Box w="100%">
          <Heading as="h3" size="xs">
            Calendar Input
          </Heading>
          <FormControl>
            <FormLabel>Test Label</FormLabel>
            <DatePicker />
          </FormControl>
        </Box>

        <Box w="100%">
          <Heading as="h3" size="xs">
            Dropdown
          </Heading>
          <FormControl>
            <FormLabel>Test Label</FormLabel>
            <Dropdown
              placeholder="test"
              options={[
                { value: "test", label: "test" },
                { value: "test 2", label: "test 2" },
              ]}
            />
          </FormControl>
        </Box>

        <Box w="100%">
          <Heading as="h3" size="xs" mb={2}>
            Checkbox
          </Heading>
          <FormControl>
            <CheckboxGroup defaultValue={["test1", "test3"]}>
              <VStack alignItems="flex-start" spacing={6}>
                <Checkbox value="test1">test1</Checkbox>
                <Checkbox value="test2">test2</Checkbox>
                <Checkbox value="test3">test3</Checkbox>
              </VStack>
            </CheckboxGroup>
          </FormControl>
        </Box>

        <Box w="100%">
          <Heading as="h3" size="xs" mb={2}>
            Radio
          </Heading>
          <FormControl>
            <RadioGroup defaultValue={"test1"}>
              <VStack alignItems="flex-start" spacing={6}>
                <Radio value="test1">test1</Radio>
                <Radio value="test2">test2</Radio>
                <Radio value="test3">test3</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>
        </Box>
      </VStack>
    </>
  );
};
