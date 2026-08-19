import Header from "../elements/Header";

export function HomePage() {
    const backgroundImg = {
        minHeight: "750px",
    }
    const inputField = {
        border: "black",
        margin: "1%",
        borderRadius: "3px",
        width: "40%"
    }
    const button = {
        width: "60%"
    }

    return (
        <>
        <Header page = "Home Page"/>
        <div className = "image-container">
            <img className="background-img" style={backgroundImg} src = "../src/elements/band-logo.jpg"/>
            <div className="top-content">
                <div className="cardStyle">
                    <h2>About Us</h2>
                    <p>Voltage Parade is a Rock band based in Bradford/Leeds. Formed in August 2026, the band is known for their unique guitar driven tone 
                        with catchy bass lines. We take inspiration from bands/Artists such as</p><br/>
                        <p>Lineup: </p>
                        <ul>
                            <li>Kyle (Vocals/Guitar)</li>
                            <li>Alyssa (Guitar)</li>
                            <li>Andrew (Bass Guitar)</li>
                            <li>James (Drums)</li>
                        </ul>
                </div>
                <div className="cardStyle">
                    <h2>Enquiries</h2>
                    <label>Email</label><br/>
                    <input style={inputField}/><br/>
                    <label>Full Name</label><br/>
                    <input style={inputField}/><br/>
                    <label>Message</label><br/>
                    <textarea style={inputField}/><br/>
                    <hr/>
                    <button className="itemButton" style={button}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}