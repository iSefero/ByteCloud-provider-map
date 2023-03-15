export const styles = {
  wrapper: ({locationH, locationW}) => ({
    display: "flex",
    alignItems: "flex-end",
    position: "absolute",
    top:`${locationH}px`,
    left:`${locationW}px`,
    width: "10%",
    justifyContent: "center"
  })
}