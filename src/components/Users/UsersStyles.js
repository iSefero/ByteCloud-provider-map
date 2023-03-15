
export const usersStyles = [
   {name: "north_america",
      small: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.04),
        left: locationW(-0.01)
      }),
      medium: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.08),
        left: locationW(0.03)
      }),
      large: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.04),
        left: locationW(0.07)
      }),
    },
     {name: "south_america",
      small: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.01),
        left: locationW(0.005)
      }),
      medium: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.12),
        left: locationW(0.036)
      }),
      large: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.047),
        left: locationW(0.06)
      }),
    },
    {name: "europe",
      small: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.001),
        left: locationW(0.104)
      }),
      medium: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.094),
        left: locationW(-0.025)
      }),
      large: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.043),
        left: locationW(0.043)
      }),
    },
    {name: "asia",
      small: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(-0.065),
        left: locationW(0.11)
      }),
      medium: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.07),
        left: locationW(-0.023)
      }),
      large: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.04),
        left: locationW(0.07)
      }),
    },
    {name: "oceania",
      small: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.1),
        left: locationW(0.121)
      }),
      medium: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.1),
        left: locationW(0.0785)
      }),
      large: ({locationW, locationH}) => ({
        width: "30%",
        position: "absolute",
        top: locationH(0.1),
        left: locationW(0.159)
      }),
    },
];

export const otherStyles = {
  wrapper: ({locationH, top, locationW, left}) => ({
    display: "flex",
    position: "absolute",
    top:`${locationH(top)}px`,
    left:`${locationW(left)}px`,
    width: "20%"
  })
}
