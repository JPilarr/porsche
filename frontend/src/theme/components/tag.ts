const Tag = {
  baseStyle: {
    container: {},
  },
  variants: {
    brand: ({ colorScheme }: any) => ({
      container: {
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "160%",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        borderRadius: "32px",
        height: "32px",
        padding: "2px 10px",
        bg:
          colorScheme === "blue"
            ? "#EBF3FF"
            : colorScheme === "green"
            ? "#E0F8F1"
            : "#EEF0F3",
        color:
          colorScheme === "blue"
            ? "#3083FF"
            : colorScheme === "green"
            ? "#30D1A1"
            : "#000",
      },
    }),
  },
};

export default Tag;
