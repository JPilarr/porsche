import { Icon, VStack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { FC } from "react";
import { DropdownIndicatorProps } from "react-select";
import { ReactComponent as IconChevronDown } from "static/icons/chevron_down.svg";

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <VStack p={4} cursor="pointer" justifyContent="center">
      <Icon
        transition="transform .2s ease"
        transform={props.selectProps.menuIsOpen ? "rotate(180deg)" : ""}
        as={IconChevronDown}
      />
    </VStack>
  );
};

type OptionType = {
  label: string;
  value: string;
};

interface DropdownTypes {
  options: OptionType[];
}

export const Dropdown: FC<DropdownTypes> = (props) => {
  return (
    <Select
      {...props}
      components={{
        DropdownIndicator,
        IndicatorSeparator: null,
      }}
      placeholder="Select option"
      selectedOptionColor="blue"
    />
  );
};
