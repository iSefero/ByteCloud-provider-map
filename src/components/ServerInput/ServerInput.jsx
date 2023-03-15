// React
import React from "react";

// Common
import filled from "../../assets/icons/circle_filled.png";
import empty from "../../assets/icons/circle_empty.png";
import { useDispatch, useSelector } from "react-redux";
import { setServer } from "../../redux/slices/dataSlice";
import { styles } from "./ServerInputStyle";

export const ServerInput = ({top, left, name}) => {
  const dispatch = useDispatch();
  const {width, height} = useSelector(state => state.data.mapSize);
  const [hoverValue, setHoverValue] = React.useState(false);

  const handleValueChange = () => {
    dispatch(setServer({name}))
  };

  const handleHoverValueChange = (bool) => {
    setHoverValue(bool)
  };

  const locationW = width * left;
  const locationH = height * top;

  const correctedImage = (number) => hoverValue >= number ? filled : empty;

  return (
    <div style={styles.wrapper({locationH, locationW}) }>
      <img
        onMouseEnter={() => handleHoverValueChange(true)}
        onMouseLeave={() => handleHoverValueChange(false)}
        onClick={handleValueChange}
        style={styles.imageInput}
        src={correctedImage(1)}
        alt="error"
        width="30%"/>
    </div>
  );
};