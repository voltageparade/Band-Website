import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Header(props) {
    const navbar = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        width: "100%",
    }

    const button = {
        width: "30%",
        padding: "1% 0",
        maxWidth: "300px",
        backgroundColor: "rgba(137, 58, 137, 0.55)",
        boxShadow: "1px 2px 2px rgba(70, 38, 70, 0.55)",
        fontSize: "18px",
        color: "white",
        border: "none",
        borderRadius: "5px",
        textDecoration: "none",
        transition: "0.3s ease",
        cursor: "pointer"}
    
        const hr = {
            backgroundColor: "black",
            color: "black"
        }

    return (
        <header className="top-bottom-elements" >
            <h1>Voltage Parade</h1>
            <h3>{props.page}</h3>
            <hr style={hr}/>
            <nav style = {navbar}>
                <Link style = {button} to = "/">Home</Link>
                <Link style = {button} to = "/EventsPage">Events</Link>
                <Link style = {button} to = "/ReleasesPage">Releases</Link>
            </nav>
        </header>
    )
}

Header.propTypes = {
    page: PropTypes.string.isRequired
};
Header.defaultProps = {
    page: "Unknown ",
};

export default Header;