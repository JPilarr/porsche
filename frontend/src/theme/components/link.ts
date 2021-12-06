const Link = {
  baseStyle: {
    textDecoration: "underline",
    fontSize: "15px",
    _hover: {
      color: "red.active",
      textDecoration: "underline",
    },
    _focus: {
      boxShadow: "none",
      outline: "none",
      color: "rgba(255,0,0,0.5)",
    },
  },
  variants: {
    red: {
      textDecoration: "none",
      color: "red.active",
      fontWeight: "500",
      _hover: {
        textDecoration: "underline",
      },
    },
  },
};

export default Link;
