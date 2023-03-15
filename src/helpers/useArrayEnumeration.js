import { latencyData } from "../data/latencyData";
import { useSelector } from "react-redux";
import React from "react";

export const useArrayEnumeration = () => {
  const {usersValue, server, byteCloudServers, showLatency } = useSelector(state => state.data);
  const [data, setData] = React.useState([]);
  const [showTable, setShowTable] = React.useState(false)


  React.useEffect(() => {
    setShowTable(false)

    if (showLatency) {
      setData(byteServers);
    }
    setTimeout(() => {
      setData(singleServer);
    }, 3500);

    if (showLatency) {
      setTimeout(() => {
        setShowTable(true)
      }, 10300)
    }

  }, [showLatency]);

  const sortResult = (array) => resultArray(array).sort((a, b) => b.count - a.count);

  const resultArray = (usersData) => usersData.reduce((acc, current) => {
    const matching = latencyData.find((item) => item.name === current.name);
    if (matching) {
      acc.push({
        ...current,
        ...matching,
      });
    }
    return acc;
  }, []);

  const singleServer = usersValue.map((obj) => {
    return {
      name: `${server.name}${obj.name}`,
      count: obj.count
    };
  });

  const byteServers = byteCloudServers.map((s) => {
    return usersValue.map((t) => {
      return {
        name: `${s.name}${t.name}`,
        count: t.count
      };
    });
  }).flat().filter((obj) => {
    return (obj.name === "west_usa_south_america" ||obj.name === "east_usa_north_america" || obj.name === "germany_europe" || obj.name === "singapore_asia" || obj.name === "singapore_oceania")
  });

  return [resultArray, singleServer, byteServers, data, showTable, sortResult, setShowTable]
};