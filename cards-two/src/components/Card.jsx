import React from "react";
function Card(props) {
    const {title, text} = props;

    return (
        <div className="card">
            <div className="card-body">
                {title && <h4 className="card-title">{title}</h4>}
                {text && <p className="card-text">{text}</p>}
            </div>
        </div>
    );
}

export default Card;