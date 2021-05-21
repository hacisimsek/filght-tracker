import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Search from "./Search";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./styles/SearchPage.css";
import TextField from "@material-ui/core/TextField";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SearchIcon from "@material-ui/icons/Search";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import InputAdornment from "@material-ui/core/InputAdornment";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import { useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import FlightResults from "./FlightResults";

function SearchPage() {
  const [fromAirportDatas, setFromAirportDatas] = useState([]);
  const [selectedFromData, setSelectedFromData] = useState("");
  const [selectedToData, setSelectedToData] = useState("");
  const [toAirportDatas, setToAirportDatas] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [fromAirportName, setFromAirportName] = useState([]);
  const [toAirportName, setToAirportName] = useState([]);
  const [showFlightResults, setShowFlightResults] = useState(false);
  const [date, setDate] = useState("");
  const [guestNumber, setGuestNumber] = useState("");

  const history = useHistory();

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSearchButton = () => {
    setShowFlightResults(true);
  };

  const handleToDataChange = (event) => {
    setSelectedToData(event.target.value);

    setTimeout(() => {
      const toAirportSelector = document.querySelector("#outlined-basic");
      if (toAirportSelector) {
        const toAirportNameInnerText = toAirportSelector.innerText;
        toAirportName.push(toAirportNameInnerText);
      }
    }, 400);
  };

  const handleDateChange = () => {
    setTimeout(() => {
      const dateSelector = document.querySelector(
        " div.rdrCalendarWrapper.rdrDateRangeWrapper > div.rdrDateDisplayWrapper > div > span.rdrDateInput.rdrDateDisplayItem.rdrDateDisplayItemActive > input"
      );

      const guestNumberSelector = document.querySelector(
        " div.MuiDialogContent-root > div > input[type=number]"
      );

      if (dateSelector && guestNumberSelector) {
        const guestNumberValue = guestNumberSelector.value;
        const dateValue = dateSelector.value;
        console.log("date " + dateValue);
        console.log("guest " + guestNumberValue);
        setGuestNumber(guestNumberValue);
        setDate(dateValue);
      }
    }, 400);
  };

  const handleFromDataChange = (event) => {
    setSelectedFromData(event.target.value);

    setTimeout(() => {
      const fromAirportSelector = document.querySelector(
        "#standard-select-currency"
      );
      const fromAirportNameInnerText = fromAirportSelector.innerText;
      fromAirportName.push(fromAirportNameInnerText);
    }, 400);
  };

  //from airport datas
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setFromAirportDatas(data);
      });
  }, []);

  //to airport datas
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setToAirportDatas(data);
  //     });
  // }, []);

  return (
    <div>
      {showFlightResults ? (
        <FlightResults
          to={toAirportName}
          from={fromAirportName}
          date={date}
          guestNumber={guestNumber}
        />
      ) : (
        <div className="searchpage__div">
          <div className="searchpage__container">
            <div className="searchpage__border">
              <FormControl>
                <TextField
                  select
                  data-testid="form-test"
                  style={{ backgroundColor: "white", width: "25ch" }}
                  id="standard-select-currency"
                  label="From"
                  variant="outlined"
                  required={true}
                  value={selectedFromData}
                  onChange={handleFromDataChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlightTakeoffIcon />
                      </InputAdornment>
                    ),
                  }}
                >
                  {fromAirportDatas.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
              <FormControl>
                <InputLabel>To</InputLabel>
                <TextField
                  select
                  data-testid="to-test"
                  style={{ backgroundColor: "white", width: "25ch" }}
                  id="outlined-basic"
                  label="To"
                  value={selectedToData}
                  onChange={handleToDataChange}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlightLandIcon />
                      </InputAdornment>
                    ),
                  }}
                >
                  {fromAirportDatas.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>

              <FormControl>
                <Button
                  variant="outlined"
                  className="searchPage__button"
                  variant="outlined"
                  onClick={handleClickOpen}
                >
                  Dates
                  <CalendarTodayIcon style={{ marginLeft: "15px" }} />
                </Button>
                <Dialog
                  open={openDialog}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    Choose Your Departure Date
                  </DialogTitle>
                  <DialogContent
                    style={{
                      width: "579px",
                      height: "400px",
                    }}
                  >
                    <Search />
                  </DialogContent>
                  <DialogActions>
                    <Button
                      style={{ textTransform: "inherit" }}
                      onClick={handleClose}
                      color="primary"
                    >
                      Close
                    </Button>
                    <Button
                      style={{ textTransform: "inherit" }}
                      onClick={() => {
                        handleDateChange()

                      }}
                      color="primary"
                    >
                      Save Dates
                    </Button>
                  </DialogActions>
                </Dialog>
              </FormControl>
              <FormControl>
                <Button
                  onClick={handleSearchButton}
                  variant="outlined"
                  variant="outlined"
                  className="searchPage__button"
                >
                  <SearchIcon />
                </Button>
              </FormControl>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
