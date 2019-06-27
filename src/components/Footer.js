import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function launchMap() {
  if /* if we're on iOS, open in Apple Maps */
  ((navigator.platform.indexOf("iPhone") !== -1) || 
   (navigator.platform.indexOf("iPad") !== -1) || 
   (navigator.platform.indexOf("iPod") !== -1))
  window.open("maps://maps.google.com/maps?daddr=92+Deep+Woods+Lane,+Cameron,+NC/");
else /* else use Google */
  window.open("https://maps.google.com/maps?daddr=92+Deep+Woods+Lane,+Cameron,+NC/");
}


function toggleFilters() {
  let filterMenu = document.getElementById("filter").classList
  let filterIcon = document.getElementById("filterIcon").classList
  if(filterMenu.contains("show")){
    filterMenu.remove("show")
    filterIcon.remove("active")
  }
  else{
    filterMenu.add("show");
    filterIcon.add("active");
  }
}

function toggleInfo() {
  document.getElementById("about").classList.remove("hide")
  document.getElementById("about").classList.add("show")
}

export default props => (

  <div className="footer">
    <div onClick={toggleFilters} className="footer_filter">  
      <FontAwesomeIcon 
        id="filterIcon"
        className = "icon-bars"
        icon ="bars"/>
      <span className="footer-filter-text">FILTER</span>
    </div>
      
    <div onClick={toggleInfo} className="footer_about">
      <FontAwesomeIcon 
        className="icon-info"
        icon="info-circle"/>
      <span className="footer-info">INFO</span>
    </div>

    <div onClick={launchMap} className="footer_map">
      <FontAwesomeIcon
        className="icon-directions"
        icon="directions"/>
      <span className="footer-dir">DIRECTIONS</span>
    </div>

  </div>
)
