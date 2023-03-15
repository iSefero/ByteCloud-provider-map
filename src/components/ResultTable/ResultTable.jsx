// React
import React from "react";

// Primereact
import { Rating } from "primereact/rating";

// Common
import "./ratingColor.css"
import { arrayOfUsers } from "../../data/usersData"
import { styles } from "./ResultTableSyle";


export const ResultTable = ({ array }) => {
  const [rating, setRating] = React.useState({rating: 0, video: ""});
  const latency = Math.max(...Object.values(array.latency));
  const correctName = arrayOfUsers.find(item => array.name.includes(item.name.split('_')[0]));

  const countryName = correctName.name.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  React.useEffect(() => {
    if (latency < 100) {
      setRating({rating: 5, video: "4k/2160p Ultra HD"})
    }
    else if (latency < 150) {
      setRating({rating: 4, video: "4k/2160p Ultra HD"})
    }
    else if (latency < 200) {
      setRating({rating: 3, video: "1080p Full HD"})
    }
    else if (latency < 250) {
      setRating({rating: 2, video: "720p HD"})
    }
    else if (latency < 1000) {
      setRating({rating: 1, video: "720p HD"})
    }
    else {
      setRating({rating: 0, video: "320p"})
    }
  }, [latency]);

   return (
     <div style={styles.wrapper}>
       <div style={styles.content}>
         <div style={styles.countryRating}>
           <div style={styles.countryName}>
             <span style={styles.countryText}>{countryName}</span>
           </div>
           <div style={styles.rating}>
             <Rating stars={5} value={rating.rating} className="custom-rating" readOnly cancel={false} />
           </div>
         </div>
         <div style={styles.infoBlock}>
           <div style={styles.latencyBlock}>
             <span>
             Latency
             </span>
             <span>
               {latency}
             </span>
           </div>
           <div style={styles.timeBlock}>
             <span>
             Download time
             </span>
             <span>
               {((latency * 15) / 1000).toFixed(1)} sec
             </span>
           </div>
           <div style={styles.videoBlock}>
             <span>
             Video streaming
             </span>
             <span>
               {rating.video}
             </span>
           </div>
         </div>
       </div>
     </div>
   )
};