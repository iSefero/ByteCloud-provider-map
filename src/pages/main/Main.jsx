// React
import React from "react"
import {useDispatch, useSelector} from "react-redux";

// Common
import mapIcon from "../../assets/icons/mapIcon.png"
import { Users } from "../../components/Users/Users";
import { Header } from "../../components/Header/Header";
import { Server } from "../../components/Server/Server";
import { Vectors } from "../../components/Vectors/Vectors";
import { UserInput } from "../../components/UserInput/UserInput";
import { ServerInput } from "../../components/ServerInput/ServerInput";
import { TimeReports } from "../../components/TimeReports/TimeReports";
import { ResultTable } from "../../components/ResultTable/ResultTable";
import { useElementSize } from "../../helpers/useElementSize";
import { useArrayEnumeration } from "../../helpers/useArrayEnumeration";
import { mainStyle } from "./MainStyle";
import { usersStyles } from "../../components/Users/UsersStyles";
import { arrayOfUsers } from "../../data/usersData";
import { arrayOfServers } from "../../data/serverDatas";
import { arrayOfTimeReports } from "../../data/timeReportData";
import { setMapSize, setShowLatency} from "../../redux/slices/dataSlice";


export const Main = () => {
  const dispatch = useDispatch();
  const [blockRef, contentSize] = useElementSize();
  const [resultArray, singleServer, byteServers, data, showTable, sortResult] = useArrayEnumeration();
  const {usersValue, server, byteCloudServers, usersLoaded, showLatency } = useSelector(state => state.data);

  React.useEffect(() => {
    if (contentSize.width > 0)
    dispatch(setMapSize(contentSize));
  }, [dispatch, contentSize]);

  const renderSelectedUsers = arrayOfUsers.map((item) => {
    const isUserSelected = usersValue.some((user) => user.name === item.name);
    return isUserSelected ? (
      <Users
        key={item.name}
        styles={usersStyles.find((i) => i.name === item.name)}
        top={item.topUser}
        left={item.leftUser}
        name={item.name}
        latency={resultArray(data) && resultArray(data).find((i) => i.name.includes(item.name))}
      />
    ) : (
      !usersLoaded &&
      <UserInput
        key={item.name}
        name={item.name}
        styles={usersStyles.find((i) => i.name=== item.name)}
        top={item.topInput}
        left={item.leftInput}
      />
    );
  });

  const renderTimeReports = arrayOfTimeReports.map((item) => {
    const isUserSelected = usersValue.some((user) => user.name === item.name);
    return isUserSelected && (
      <TimeReports
      key={item.name}
      top={item.top}
      left={item.left}
      latency={resultArray(data) && resultArray(data).find((i) => i.name.includes(item.name))}
      />
    );
  });

  const renderServers = arrayOfServers.map((item) => {
    const correctIcon = server.name === item.name;
    const isServerSelected = byteCloudServers.some((server) => server.name === item.name);
    return (!isServerSelected || !server.name) ? (
      !showLatency && <ServerInput
        key={item.name}
        top={item.top}
        left={item.left}
        name={item.name}
      />
    ) : (
      <Server
        iconValue={correctIcon}
        key={item.name}
        name={item.name}
        top={item.top}
        left={item.left}
      />
    );
  });

  const renderContent = !usersLoaded ? renderSelectedUsers : [...renderServers, ...renderSelectedUsers];

  const handleShowServer = () => byteCloudServers.length === 4 ? dispatch(setShowLatency(true)) : null
  handleShowServer();

  const renderByteCloudTable = sortResult(byteServers).map((item) =>
      <ResultTable key={item.name}  array={item}/>);

  const renderSingleServerTable = sortResult(singleServer).map((item) =>
  <ResultTable key={item.name} array={item}/>);

  const map = <img style={mainStyle.map} ref={blockRef} src={mapIcon} alt="error"/>

  const handleClearStorage = () => {
    window.location.reload()
  };

  return (
    <div style={mainStyle.wrapper}>
      {showTable ?
        <>
          <div style={mainStyle.tableWrapper}>
            <div style={mainStyle.resetBlock}>
              <span style={mainStyle.resetText}>Do you want to</span>
              <span style={mainStyle.resetButton} onClick={handleClearStorage}>start again?</span>
            </div>
            <div style={mainStyle.tableBlock}>
              <span style={mainStyle.tableText}>ByteCloud</span>
              {renderByteCloudTable}
            </div>
            <div style={mainStyle.tableBlock}>
              <span style={mainStyle.tableText}>Object Storage</span>
              {renderSingleServerTable}
            </div>
          </div>
          {map}
        </>
        :
        <>
          {!showLatency && <Header/>}
          {map}
          <Vectors array={resultArray(data)}/>
          {renderContent}
          {showLatency && renderTimeReports}
        </>
      }
    </div>
  )
};
