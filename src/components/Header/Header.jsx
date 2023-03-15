// React
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Common
import { setShowLatency, setUserLoaded } from "../../redux/slices/dataSlice";
import { styles } from "./HeaderStyle";

export const Header = () => {
  const {usersValue, server, byteCloudServers, usersLoaded } = useSelector(state => state.data);
  const dispatch = useDispatch();

  const buttonDisabled = byteCloudServers.length < 3;

  const handleHideUsers = () => {
    dispatch(setUserLoaded(true));
  };
  const handleStartSpeedTest = () => {
    dispatch(setShowLatency(true));
  };

  const renderChooseUserText =
   (<>
      <span
        style={styles.simpleText}>Where are your users? Choose the number for every region.</span>
        {usersValue.length >= 1 && <span onClick={handleHideUsers} style={styles.nextButton}>Next</span>}
    </>
   );

  const renderChooseServerText = (!server.name
    ?
    <span style={styles.simpleText}>Where is your data? Choose one spot for Object system</span>
    :
    <>
      <span style={styles.simpleText}>Choose minimum two additional spots for ByteCloud and press</span>
      <button
        style={{
          backgroundColor: "inherit",
          border: "none",
          cursor: "pointer",
          fontSize: "30px",
          color: !buttonDisabled ? "blue" : "grey",
        }}
        onClick={handleStartSpeedTest}
        disabled={buttonDisabled}>Start
      </button>
    </>
  );

  return(
    <div style={styles.wrapper}>
      {usersLoaded ? renderChooseServerText : renderChooseUserText}
    </div>
  )
};