import React from "react";
import "./card.scss";

const CardComponent =(props) =>{
    console.log(props.item)
    return(
        <div className="card-container">
            <div className="card-header">
                <span><center><b>A2B</b></center></span>
            </div>
            <div className="card-body">
                <div className="name">
                    <span className="item">{props.item.name}</span>
                    <span className="value"> {props.item.price} </span>
                </div>
                <div className="name">
                    <span className="item">Category</span>
                    <span className="value">Non-Veg</span>
                </div>
                <div className="name">
                    <span className="item">Rating</span>
                    <span className="value">****</span>
                </div>

            </div>

        </div>
    )
}

export default CardComponent;