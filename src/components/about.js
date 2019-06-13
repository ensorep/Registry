import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => (
  <div className="about">
    <div className="about_header">
      <h3 className="about_header-title">Welcome!</h3>
      <span className="about_close">
        <FontAwesomeIcon
          className="icon-close"
          icon="times"
        />
      </span>
    </div>
    <div className="about_info">
      <p className="about_info-blurb"></p>
    </div>
  </div>
)