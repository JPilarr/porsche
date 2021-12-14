const Accordion = {
  baseStyle: {
    container: {
      fontSize: "14px",
      border: "none",
      marginBottom: "16px",
    },
    button: {
      bgColor: "#F8F8FA",
      borderRadius: "51px",
      padding: "16px 24px 16px 28px",

      _hover: {
        color: "brand.primary",
      },
      _focus: {
        outline: "none",
        boxShadow: "none",
      },
    },
  },
  variants: {
    brand: {
      container: {
        fontSize: "15px",
        border: "2px solid #DEE0E5",
        padding: "14px 8px",
        boxShadow: "none",
      },
    },
  },
};

export default Accordion;
