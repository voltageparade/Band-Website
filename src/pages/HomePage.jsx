import { useState } from "react";

export function HomePage() {
    const [introDisplay, setIntroDisplay] = useState(false);
    const [releasesDisplay, setReleasesDisplay] = useState(false);
    const [eventsDisplay, setEventsDisplay] = useState(false);

    const backgroundImg = {
        minHeight: "1300px",
    }
    const inputField = {
        border: "black",
        margin: "1%",
        borderRadius: "3px",
        width: "40%",
        backgroundColor: "black",
        minHeight: "20px"
    }
    const button = {
        width: "60%"
    }
    const introBox = {
        display: introDisplay ? "block" : "none"
    }
    const releasesBox = {
        display: releasesDisplay ? "block" : "none"
    }

    const eventsBox = {
        display: eventsDisplay ? "block" : "none"
    }

    const andrewIntro = "I was influenced by the Red Hot Chili Peppers and I like to be a part of this band to grow as a bassist.";
    const samIntro = ""
    const KjIntro = "My influences are David Gilmour, Joe Satriani, Slash and Steve Vai with these  influences is the reason why I do guitar and my lead solos are based of the melodic style of these guitarists and I like been in the band because it's building up my confidence to gain more skills in playing lead and singing at the same time"
    const alyssaIntro = "After starting guitar lessons at the age of 10 my influences have changed throughout the years but my main influence to make the switch from acoustic to electric is the Arctic Monkeys. From my first exposure to a band setting at 14 I knew I wanted to be in a band to jam and make music with other musicians. Tour life has always been a dream of mine and I can't wait to get out there and gig"

    const [introText, setIntroText] = useState("");
    const [name, setName] = useState("");

    function viewAndrew() {
        setIntroDisplay(true);
        setIntroText(andrewIntro);
        setName("Andrew")
    }
    function viewSam() {
        setIntroDisplay(true);
        setIntroText(jamesIntro);
        setName("Sam")
    }
    function viewKyle() {
        setIntroDisplay(true);
        setIntroText(KjIntro);
        setName("KJ")
    }
    function viewAlyssa() {
        setIntroDisplay(true);
        setIntroText(alyssaIntro);
        setName("Alyssa")
    }

    function viewReleases () {
        setReleasesDisplay(true)
    }
    
    function viewEvents () {
        setEventsDisplay(true)
    }
    return (
        <>
                <div className="cardStyle">
                    <h2>About Us</h2>
                    <p>Voltage Parade is a Rock band based in Bradford/Leeds. Formed in August 2026, the band is known for their unique guitar driven tone 
                        with catchy bass lines. We take inspiration from bands/Artists such as Hendrix, Pink Floyd, Red Hot Chilli Peppers, Arctic Monkeys and Black Sabbath. </p><br/>
                        <p>Lineup: </p>
                        <ul>
                            <li>KJ (Vocals/Guitar)</li>
                            <li>Alyssa (Guitar)</li>
                            <li>Andrew (Bass Guitar)</li>
                            <li>Sam(Drums)</li>
                        </ul>
                </div>

                <div className="cardStyle">
                    <h2>An Intro to the band</h2>
        
                    <button className="itemButton" onClick={viewAndrew}>Andrew</button>
                    <button className="itemButton" onClick={viewSam}>James</button>
                    <button className="itemButton" onClick={viewKyle}>KJ</button>
                    <button className="itemButton" onClick={viewAlyssa}>Alyssa</button>

                    <div style={introBox}>
                        <h2></h2>
                        <p>{introText}</p>
                        <p>- {name}</p>
                    </div>
                </div>

                <div className="cardStyle">
                    <h2>Events</h2>
                    <button className = "itemButton" style = {button} onClick={viewEvents}>View Events</button>
                    <div style = {eventsBox}>
                        <p>No Upcoming Events</p>
                    </div>
                </div>

                <div className="cardStyle"> 
                    <h2>Releases</h2>
                    <button className = "itemButton" style = {button} onClick = {viewReleases}>View Releases</button>
                    <div style = {releasesBox}>
                        <p>No Releases yet</p>
                    </div>
                </div>

                <div className="cardStyle">
                    <h2>Enquiries</h2>
                    <hr/>
                    <a target = "_blank" href = "mailto:voltageparade@gmail.com"><button className="itemButton" style={button}>Click Here</button></a>
                </div>
        </>
    )
}
