// React
import React from "react";
import { useSelector } from "react-redux";

// Common
import twoServer from "../../assets/icons/server.png";
import server from "../../assets/icons/server_ByteCloud.png";
import { styles } from "./ServerStyle";

export const Server = ({top, left, iconValue}) => {
  const {width, height} = useSelector(state => state.data.mapSize);

  const locationW = width * left;
  const locationH = height * top;

  return (
    <div style={styles.wrapper({locationH, locationW})}>
      <img
        src={iconValue ? twoServer : server}
        alt="error"
        width="30%"/>
    </div>
  );
};