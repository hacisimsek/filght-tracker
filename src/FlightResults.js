import React from "react";
import "./styles/FlightResults.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function FlightResults({ from, to, date, guestNumber }) {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>7 flights · {guestNumber} passengers</p>
        <h1>
          {from} to {to} , {date}
        </h1>
        <Button variant="outlined">Number of stops</Button>
        <Button variant="outlined">Departure</Button>
        <Button variant="outlined">Arrival</Button>
        <Button variant="outlined">Fare</Button>
        <Button variant="outlined">Duration</Button>
        <Button variant="outlined">More Filters</Button>
      </div>

      <SearchResult
        img="https://pbs.twimg.com/profile_images/1053335815701647360/cGDDQU6W_400x400.jpg"
        from={from}
        to={to}
        description="Turkish Airlines"
        time="08:00"
        duration="1h 40m"
        total="$110"
      />
      <SearchResult
        img="https://pbs.twimg.com/profile_images/1053335815701647360/cGDDQU6W_400x400.jpg"
        from={from}
        to={to}
        description="Turkish Airlines"
        time="09:00"
        duration="1h 40m"
        total="$200"
      />
      <SearchResult
        img="https://pbs.twimg.com/profile_images/1053335815701647360/cGDDQU6W_400x400.jpg"
        from={from}
        to={to}
        description="Turkish Airlines"
        time="10:00"
        duration="1h 40m"
        total="$150"
      />
      <SearchResult
        img="https://pbs.twimg.com/profile_images/1053335815701647360/cGDDQU6W_400x400.jpg"
        from={from}
        to={to}
        description="Turkish Airlines"
        time="11:00"
        duration="1h 40m"
        total="$120"
      />
      <SearchResult
        img="https://pbs.twimg.com/profile_images/1053335815701647360/cGDDQU6W_400x400.jpg"
        from={from}
        to={to}
        description="Turkish Airlines"
        time="12:00"
        duration="1h 40m"
        total="$300"
      />
      <SearchResult
        img="https://pbs.twimg.com/profile_images/1053335815701647360/cGDDQU6W_400x400.jpg"
        from={from}
        to={to}
        description="Turkish Airlines"
        time="13:00"
        duration="1h 40m"
        total="$250"
      />
      <SearchResult
        img="https://pbs.twimg.com/profile_images/1053335815701647360/cGDDQU6W_400x400.jpg"
        from={from}
        to={to}
        description="Turkish Airlines"
        time="14:00"
        duration="1h 40m"
        total="$110"
      />
    </div>
  );
}

export default FlightResults;
