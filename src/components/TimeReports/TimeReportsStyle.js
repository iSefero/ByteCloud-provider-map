export const styles = {
  wrapper: ({locationH, locationW}) => ({
    display: "flex",
    padding: "5px 10px",
    borderRadius: "5px",
    gap: "5px",
    alignItems: "flex-end",
    position: "absolute",
    top: locationH,
    left: locationW,
    width: "10%",
    justifyContent: "center",
    backgroundColor: "rgba(128, 128, 128, 0.45)",
    color: "black"
  }),

  text: {
    fontSize: "18px",
    fontWeight: 600
  }
}