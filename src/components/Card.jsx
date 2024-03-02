import React from "react";

const Card = (props) => {
    const { teamName, imageSrc, division, url } = props;

    return (
        <div className="Card">
            <h2>{teamName}</h2>
            <img src={imageSrc} alt={`${teamName} Logo`} />
            <p>Division: {division}</p>
            <a href={url}>
                Visit Team Schedule
            </a>
        </div>
    );
}

export default Card;