import Header from "../elements/Header";
import { Event } from "../elements/Event";

export function EventsPage() {
    return (
        <>
        <Header page = "Events Page"/><br/>
        <div className = "image-container">
            <img className="background-img" src = "../src/elements/band-logo.jpg"/>
            <div className="top-content">
                <Event location = "Belgrave Music Hall" date = "4th October 2026" doorsOpen = "6pm" onStage = "7pm"/><br/><br/>
            </div>
        </div>
        </>
    )
}