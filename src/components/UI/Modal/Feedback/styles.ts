const styles = {
  modal: { height: "auto" },
  containerForm: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  containerButtons: {
    display: "flex",
    justifyContent: "center",
    marginTop: 35,
  },
  buttonSubmit: {
    background: "#1A0E21",
    color: "#913EC8",
    borderColor: "#331345",
    fontSize: "24px",
    gap: "35px",
    cursor: "pointer",
  },
} as const;

export default styles;
