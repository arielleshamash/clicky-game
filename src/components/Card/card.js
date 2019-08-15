import React from "react";
import "./card.css";

var Card = props => (
    <div className="card" value={props.id} onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default Card;