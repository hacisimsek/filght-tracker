import React from "react";
import "../styles/Banner.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Book a flight to uncover the hidden gems near you</h5>
        <Button data-testid="bannerButton" onClick={() => history.push("/search")} variant="outlined">
          Explore
        </Button>
      </div>
    </div>
  );
}

export default Banner;
