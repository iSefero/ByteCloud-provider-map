export const styles = {
  wrapper: ({ correctedGap,locationH, locationW}) => ({
    display: "flex",
    gap: `${correctedGap()}px`,
    alignItems: "flex-end",
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