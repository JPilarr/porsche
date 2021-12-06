const Select = {
  baseStyle: {},
  variants: {
    brand: {
      field: {
        minHeight: "46px",
        border: "1px solid",
        borderColor: "border.gray",
        backgroundColor: "white",

        _disabled: {
          backgroundColor: "background.gray",
        },

        _invalid: {
          borderColor: "red.error",
        },

        _hover: {
          borderColor: "#BEC3CD",
        },

        "> option": {
          color: "fonts.black",
          _disabled: {
            color: "fonts.gray",
          },
        },
      },
      icon: {
        right: "15px",
        color: "fonts.black",
        fontSize: "20px",
      },
    },
    small: {
      field: {
        minHeight: "46px",
        border: "1px solid",
        borderColor: "border.gray",
        backgroundColor: "white",

        _disabled: {
          backgroundColor: "background.gray",
        },

        _hover: {
          borderColor: "#BEC3CD",
        },

        "> option": {
          color: "fonts.black",
          _disabled: {
            color: "fonts.gray",
          },
        },
      },
      icon: {
        right: "10px",
        color: "fonts.black",
        fontSize: "20px",

        _disabled: {
          display: "none",
          marginRight: "100px",
        },
      },
    },
  },
  defaultProps: {
    variant: "brand",
  },
};
export default Select;
