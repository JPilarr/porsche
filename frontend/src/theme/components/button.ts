const Button = {
  baseStyle: {
    borderRadius: "6px",
    fontWeight: "500",

    _hover: {
      _disabled: {
        backgroundColor: "#BEC3CD",
        color: "#fff",
      },
    },
    _focus: {
      boxShadow: "none",
      outline: "none",
    },
    _active: {
      boxShadow: "none",
      outline: "none",
    },
    _disabled: {
      opacity: "0.6",
      color: "#fff",
      backgroundColor: "#BEC3CD",

      _hover: {
        backgroundColor: "#BEC3CD",
        color: "#fff",
      },
    },
  },

  sizes: {
    md: {
      h: "46px",
      minW: "120px",
      px: "40px",
      py: "12px",
    },
    sm: {
      h: "40px",
      minW: "120px",
      px: "20px",
      py: "10px",
      fontSize: "15px",
    },
    xs: {
      h: "40px",
      minW: "40px",
      px: "20px",
      py: "10px",
      fontSize: "15px",
    },
    xxs: {
      h: "40px",
      minW: "40px",
      px: "0",
      py: "0",
    },
  },
  defaultProps: {
    size: "md",
  },
};

export default Button;
