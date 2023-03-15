// React
import React from "react";
import { useSelector } from "react-redux";

// Common
import { styles } from "./TimeReportsStyle";

export const TimeReports = ({left, top, latency}) => {
  const {width, height} = useSelector(state => state.data.mapSize)

  const [showTime, setShowTime] = React.useState(false);

  const maxLatency = latency && Math.max(...Object.values(latency.latency));

  const timeToShowTime = maxLatency * 15;

  const locationW = width * left;
  const locationH = height * top;

  React.useEffect(() => {
    setShowTime(false)
    if (latency?.name) {
      setTimeout(() => {
        setShowTime(true);
      }, timeToShowTime);
    }
  }, [timeToShowTime, latency]);

  const renderLatency =(
    <>
      <span style={styles.text}>Latency:</span>
      <span style={styles.text}>{maxLatency}</span>
    </>
  );
  const renderTime =(
    <>
      <span style={styles.text}>Time:</span>
      <span style={styles.text}>{(timeToShowTime / 1000).toFixed(1)}s</span>
    </>
  );

  return (
    <div style={styles.wrapper({locationH, locationW})}>
      {!showTime ? renderLatency : renderTime}
    </div>
  );
};
