const NumberInput = {
  variants: {
    brand: {
      field: {
        height: "50px",
        minHeight: "50px",
        backgroundColor: "white",
        border: "1px solid",
        borderColor: "border.gray",
        borderRadius: "14px",

        _disabled: {
          backgroundColor: "background.gray",
        },

        _readOnly: {
          backgroundColor: "background.gray",
        },

        _hover: {
          borderColor: "#BEC3CD",
        },
        _invalid: {
          borderColor: "red.error",
          backgroundColor: "#FCF4F6",
        },
        _placeholder: {
          fontSize: "14px",
        },
        _focus: {
          borderColor: "brand.primary",
        },
      },
    },
  },
  defaultProps: {
    variant: "brand",
  },
};

export default NumberInput;
