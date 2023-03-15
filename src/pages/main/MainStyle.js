export const mainStyle = {
  wrapper: {
    height: "100vh"
  },

  tableWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: "5%",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    zIndex: "1",
    backgroundColor: "rgba(204,204,204,0.5)",
    backdropFilter: "blur(5px)"
  },

  map: {
    position: "relative",
    top: 0,
    left: 0,
    width: "-webkit-fill-available",
    maxHeight: "100%"
  },

  tableBlock: {
    width: "35%",
    textAlign: "center"
  },

  tableText: {
    fontSize: "30px",
    fontWeight: 800
  },

  resetBlock: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    paddingTop: "10px",
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    width: "100%"
  },

  resetText: {
    fontSize: "30px",
    fontWeight: 500
  },

  resetButton: {
    fontSize: "30px",
    fontWeight: 500,
    color: "blue",
    cursor: "pointer"
  }
}