const Table = {
  variants: {
    custom: {
      th: {
        backgroundColor: "background.lightGray",
        borderBottom: "1px solid",
        borderBottomColor: "#DDDDDD",
        color: "font.lightGray",
        fontSize: "14px",
        fontWeight: "600",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "16px",
        paddingBottom: "16px",
        textTransform: "uppercase",
      },
      td: {
        borderBottom: "1px solid",
        borderColor: "#DDDDDD",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "7px",
        paddingBottom: "7px",
        height: "74px",
        fontSize: "14px",
      },
    },
  },

  baseStyle: {
    field: {
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
    },
  },
};

export default Table;
