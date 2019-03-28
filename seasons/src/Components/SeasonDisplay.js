import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  winter: {
    text: "It's Cool",
    iconName: "snowflake"
  },
  summer: {
    text: "Time to hit the beach",
    iconName: "sun"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const seasons = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[seasons];

  return (
    <div className={`season-display ${seasons}`}>
      <i className={`massive icon-right ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive icon-left ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
