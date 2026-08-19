import PropTypes from "prop-types";
import { useState } from "react";

export function Event(props) {
    const [showMore, setShowMore] = useState(false);

    // Styles for the amps cards
    const ImageStyle = {
        width: "80%",
        height: "60%"};
    
    const ExtraInfobox = {
        display: showMore ? "block" : "none",
        position: "fixed",
        textAlign: "center",
        boxShadow: "5px 5px 5px rgb(74, 36, 128)",
        opacity: 1.2,
        zIndex: "1000",
        top: "50%",
        left: "50%",
        width: "70%",
        maxWidth: "400px",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        backgroundColor: "rgb(56, 56, 56)",
        borderRadius: "6px"};

    // Learn More buttons
    const handleLearnMore = () => {
        setShowMore(!showMore)};
    return (
    <>
        <div className="cardStyle">
            <h2>{props.date}</h2>
            <p>{props.location}</p>
            <button className = "itemButton" onClick={handleLearnMore}>Event Info</button>
            <button className = "itemButton"><a href = {props.buyurl} target="_blank">Buy Tickets</a></button><br/>

            <div style={ExtraInfobox}>
                <h2>Event Information</h2>
                <p>Doors: {props.doorsOpen}</p>
                <p>On Stage: {props.onStage}</p>
                <button className='itemButton' onClick={() => setShowMore(false)}>Close</button>
                <button className='itemButton'><a href = {props.ticketurl} target="_blank">Buy Now</a></button>
            </div>
        </div>
    </>
    );
}

Event.propTypes = {
    date: PropTypes.string,
    location: PropTypes.string,
    ticketurl: PropTypes.string,
};
Event.defaultProps = {
    date: "Unknown Date",
    location: "Unknown Location"
};
