import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.handleClickEvent(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Species:</strong> {props.occupation}
          </li>
          {/* <li>
            <strong>Selected:</strong> {props.selected ? "True" : "False"}
          </li> */}
        </ul>
      </div>

    </div>
  );
}

export default FriendCard;
