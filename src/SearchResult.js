import React from "react";
import "./styles/SearchResult.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import Search from "./Search";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function SearchResult({ img, to, from, duration, description, time, total }) {
  const history = useHistory();

  function handleToken(token, addresses) {
    console.log(token + addresses);
  }

  return (
    <div className="searchResult">
      <img src={img} alt="" />

      <StripeCheckout
        stripeKey="pk_test_51HS5BHB8UiAjb0EH78kdTeooh9HI8O8054Yk4rXxdTMhLwBE9XesESKnLzTEeucE8xDmx19tqO5PW8iLIFQtC7Xm00O0gemzhH"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={total * 100}
        className="searchResult_heart"
      />

      <div className="searchResult_info">
        <div className="searchResult_infoTop">
          <p>{from}</p>
          <h3>{to}</h3>

          <p>{description}</p>
          <p style={{ marginBottom: "10px" }}>{duration}</p>
        </div>
        <div className="searchResult_infoBottom">
          <div className="searchResult_stars">
            <p>
              <strong>{time}</strong>
            </p>
          </div>
          <div className="searchResults_price">
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
