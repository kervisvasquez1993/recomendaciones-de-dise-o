import React from "react";

const PanelScreen = ({ children, className = "" }) => {
  return <div className={`screen ${className}`}>{children}</div>;
};

export default PanelScreen;
