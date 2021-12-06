const NumberInput = {
  baseStyle: {},
  variants: {
    brand: {
      field: {
        height: "46px",
        minHeight: "46px",
        backgroundColor: "white",
        border: "1px solid",
        borderColor: "border.gray",

        _disabled: {
          backgroundColor: "background.gray",
        },

        _hover: {
          borderColor: "#BEC3CD",
        },
      },
      addon: {
        height: "46px",
        minHeight: "46px",
        backgroundColor: "background.gray",
        border: "1px solid",
        borderColor: "border.gray",
      },
    },
  },
  defaultProps: {
    variant: "brand",
  },
};

export default NumberInput;
