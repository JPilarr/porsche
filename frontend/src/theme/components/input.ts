const Input = {
  baseStyle: {},
  variants: {
    brand: {
      field: {
        height: "50px",
        minHeight: "50px",
        backgroundColor: "white",
        border: "1px solid",
        borderColor: "border.gray",

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
        },
        _placeholder: {
          fontSize: "14px",
        },
      },
      addon: {
        height: "50px",
        minHeight: "50px",
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

export default Input;
