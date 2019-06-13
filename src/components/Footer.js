import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function launchMap() {
  if /* if we're on iOS, open in Apple Maps */
  ((navigator.platform.indexOf("iPhone") !== -1) || 
   (navigator.platform.indexOf("iPad") !== -1) || 
   (navigator.platform.indexOf("iPod") !== -1))
  window.open("maps://maps.google.com/maps?daddr=52+Deep+Woods+Lane,+Cameron,+NC/");
else /* else use Google */
  window.open("https://maps.google.com/maps?daddr=52+Deep+Woods+Lane,+Cameron,+NC/");
}


function toggleFilters() {
let filterMenu = document.getElementById("filter")
let filterIcon = document.getElementById("activeFilter")


  if(filterMenu.classList.contains("show")){
    filterMenu.classList.remove("show")
    filterIcon.classList.remove("active")
  }
  else{
    filterMenu.classList.add("show");
    filterIcon.classList.add("active");
  }
}

function toggleInfo() {
  //code
}

export default props => (

  <div className="footer">
    <div onClick={toggleFilters}  className="footer_filter">  
      <div
        id="activeFilter"
        className="footer_filter-active">
          <FontAwesomeIcon 
            className = "icon-bars"
            icon ="bars"/>
          
      </div>
      <span>FILTER</span>
    </div>
    <div onClick={toggleInfo} className="footer_about">
      <FontAwesomeIcon 
      className="icon-info"
      icon="info-circle"/>
      <span>INFO</span>
    </div>
    <div 
      onClick={launchMap} 
      className="footer_map">
    <FontAwesomeIcon
      className="icon-directions"
      icon="directions"/>
      <span>DIRECTIONS</span>
    </div>
  </div>
)
