const Button = {
  baseStyle: {
    borderRadius: "30px",
    fontWeight: "bold",
    fontSize: "16px",

    _focus: {
      boxShadow: "none",
      outline: "none",
    },
    _active: {
      boxShadow: "none",
      outline: "none",
    },
  },

  variants: {
    outline: {
      backgroundColor: "white",
      borderColor: "brand.primary",
      color: "brand.primary",
      _hover: {
        color: "white",
        backgroundColor: "brand.primary",
      },
      _disabled: {
        backgroundColor: "white",
        color: "border.gray",
        borderColor: "border.gray",
      },
    },
  },

  sizes: {
    md: {
      h: "52px",
      minW: "120px",
      px: "40px",
      py: "10px",
    },
  },
  defaultProps: {
    size: "md",
    color: "blue",
  },
};

export default Button;
