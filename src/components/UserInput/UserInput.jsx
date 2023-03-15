// React
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Common
import filled from "../../assets/icons/man_filled.png";
import empty from "../../assets/icons/man_empty.png";
import { setUsersValue } from "../../redux/slices/dataSlice";
import { styles } from "./UserInputStyles";

export const UserInput = ({top, left, name}) => {
  const dispatch = useDispatch();
  const {width, height} = useSelector(state => state.data.mapSize);
  const [value, setValue] = React.useState(null);
  const [hoverValue, setHoverValue] = React.useState(null);

  const handleValueChange = (number) => {
    setValue(number)
    dispatch(setUsersValue({name, count: number}))
  };

  const handleHoverValueChange = (number) => {
    setHoverValue(number)
  };

  const locationW = width * left;
  const locationH = height * top;

  const correctedGap = () => {
    if(width < 700) return 1
    else if(width < 1200) return 2
    else if(width < 1500) return 3
    else if(width < 2000) return 5
    else return 15
  };

  const correctedImage = (number) =>  value >= number || hoverValue >= number ? filled : empty;

  return (
    <div style={styles.wrapper({correctedGap, locationH, locationW}) }>
      <img
        style={styles.imageInput}
        onMouseEnter={() => handleHoverValueChange(1)}
        onMouseLeave={() => handleHoverValueChange(null)}
        onClick={() => handleValueChange(1)}
        src={correctedImage(1)}
        alt="error"
        width="8%"/>
      <img
        style={styles.imageInput}
        onMouseEnter={() => handleHoverValueChange(2)}
        onMouseLeave={() => handleHoverValueChange(null)}
        onClick={() => handleValueChange(2)}
        src={correctedImage(2)}
        alt="error"
        width="14%"/>
      <img
        style={styles.imageInput}
        onMouseEnter={() => handleHoverValueChange(3)}
        onMouseLeave={() => handleHoverValueChange(null)}
        onClick={() => handleValueChange(3)}
        src={correctedImage(3)}
        alt="error"
        width="23%"/>
    </div>
  );
};