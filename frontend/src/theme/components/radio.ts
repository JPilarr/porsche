const Radio = {
  baseStyle: {
    control: {
      minHeight: "28px",
      width: "28px",
      transition: "all .2s ease",
      backgroundColor: "white",
      _hover: {
        borderColor: "brand.primary",
      },
      _focus: {
        outline: "none",
        boxShadow: "none",
      },
      _checked: {
        border: "2px solid",
        color: "brand.primary",
        backgroundColor: "white",

        _before: {
          width: "75%",
          height: "75%",
        },

        _hover: {
          backgroundColor: "white",
          borderColor: "brand.primary",
        },
      },
    },
  },
};
export default Radio;
