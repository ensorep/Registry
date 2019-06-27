import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function closeAbout(){
  document.getElementById("about").classList.add("hide");
  document.getElementById("about").classList.remove("show");
}

export default () => (
  <div id="about" className="about">
    <div className="about_header">
      <h3 className="about_header-title">Welcome!</h3>
      <span className="about_close">
        <FontAwesomeIcon
          onClick ={closeAbout}
          className="icon-close"
          icon="times"
        />
      </span>
    </div>
    <div className="about_info">
      <p className="about_info-blurb thanks">Thanks for visiting our registry!</p>
      <p className="about_info-blurb">A few things to note:</p>
      <ul className="about_info-ul">
        <li className="about_info-li">The prices are approximations and we encourage you finding it cheaper (or used if appropriate)</li>
        <li className="about_info-li">If you plan on attending the baby shower, don't feel as if you must bring a gift. Seriously.</li>
        <li className="about_info-li">If you'd like to donate, we appreciate anything you have to offer. Whether $50, $0.50, or just a kind word.</li>
      </ul>
      <p className="about_info-blurb"> Thanks again and let us know if you run into any errors or have any questions! </p>
    </div>
  </div>
)