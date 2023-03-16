// React
import React from "react";
import { useSelector } from "react-redux";

// Common
import small from "../../assets/icons/small.png";
import smallMask from "../../assets/icons/small_mask.png";
import medium from "../../assets/icons/medium.png";
import mediumMask from "../../assets/icons/medium_mask.png";
import large from "../../assets/icons/large.png";
import largeMask from "../../assets/icons/large_mask.png";
import { otherStyles } from "./UsersStyles"

const Users = ({left, top, styles, name, latency}) => {
  const { usersValue, mapSize } = useSelector(state => state.data);
  const currentCount = usersValue.find((item) => item.name === name);

  const locationW = (posX) => mapSize.width * posX;
  const locationH = (posY) => mapSize.height * posY;

  const [smallPathValue, setSmallPathValue] = React.useState("inset(0% 90% 0% 10%)");
  const [mediumPathValue, setMediumPathValue] = React.useState("inset(0% 76% 0% 24%)");
  const [largePathValue, setLargePathValue] = React.useState("inset(0% 67% 0% 33%)");


  React.useEffect(() => {
    const changeClipPath = (startX, endX, startY, endY, duration, changeState) => {
      const start = Date.now();
      const interval = setInterval(() => {
        const timeElapsed = Date.now() - start;
        const progress = timeElapsed / (duration * 15);
        if (progress >= 1) {
          clearInterval(interval);
        }
        const x = startX + (endX - startX) * progress;
        const newClipPathValue = `inset(0% ${x}% 0% ${endX}%)`;
        changeState(newClipPathValue);
      });
    };
      if (latency) {
        latency && changeClipPath(90, 10, 0, 0, latency.latency.small, setSmallPathValue);
        latency && changeClipPath(76, 24, 0, 0, latency.latency.medium, setMediumPathValue);
        latency && changeClipPath(67, 33, 0, 0, latency.latency.large, setLargePathValue);
      }
  }, [latency]);


  return (
    <div style={otherStyles.wrapper({locationH, top, locationW, left})}>
      {currentCount.count >= 1 && <div style={styles?.large({locationW, locationH})}>
        <img
          src={small}
          alt="error"
          width="50%"/>
        <img
          style={{ position: "absolute", top: 0, left: 0, opacity: 0.4, clipPath: smallPathValue}}
          src={smallMask}
          alt="error"
          width="50%"
        />
      </div>}
      {currentCount.count >= 2 && <div style={styles?.medium({locationW, locationH})}>
        <img
          src={medium}
          alt="error"
          width="50%"/>
        <img
          style={{position: "absolute", top: 0, left: 0, opacity: 0.4, clipPath: mediumPathValue}}
          src={mediumMask}
          alt="error"
          width="50%"
        />
      </div>}
      {currentCount.count >= 3 && <div style={styles?.small({locationW, locationH})}>
        <img
          src={large}
          alt="error"
          width="50%"/>
        <img
          style={{position: "absolute", top: 0, left: 0, opacity: 0.4, clipPath: largePathValue}}
          src={largeMask}
          alt="error"
          width="50%"
        />
      </div>}
    </div>
  );
};

export default Users;
