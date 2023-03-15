export const styles = {
  wrapper: ({locationH, locationW}) => ({
    display: "flex",
    alignItems: "flex-end",
    zIndex: "10",
    cursor: "pointer",
    position: "absolute",
    top:`${locationH}px`,
    left:`${locationW}px`,
    width: "10%",
    justifyContent: "center"
  }),

  imageInput: {
    cursor: "pointer"
  }
}