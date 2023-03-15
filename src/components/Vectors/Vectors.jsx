// React
import React from "react"

// Common
import {arrayOfVectors} from "../../data/vectorsData";
import {styles} from "./VectorStyles";

export const Vectors = ({array}) => {

  const filteredArray = arrayOfVectors.filter((item) => {
    const countObj = array.find((nameObj) => nameObj.name === item.name);
    if (countObj) {
      if (countObj.count === 1) {
        item.images = { small: item.images.small };
      } else if (countObj.count === 2) {
        item.images = {
          small: item.images.small,
          medium: item.images.medium,
        };
      } else if (countObj.count === 3) {
        item.images = {
          small: item.images.small,
          medium: item.images.medium,
          large: item.images.large,
        };
      }
      return true;
    }
    return false;
  });


  const renderVectors =
    filteredArray.map((item, index) =>  (
      <React.Fragment key={index}>
        {item.images.small && <img
          style={styles.vector}
          src={item.images.small}
          alt="error"
        />}
        {item.images.medium && <img
          style={styles.vector}
          src={item.images.medium}
          alt="error"
        />}
        {item.images.large && <img
          style={styles.vector}
          src={item.images.large}
          alt="error"
        />}
      </React.Fragment>)
    )


  return (
    <>{renderVectors}</>
  )
}