export function Header () {
    const header = {
        backgroundColor: "rgb(56, 56, 56)",
        top: "0",
        padding: "1%",
        color: "white"
    }
    const button = {
        padding: "5px 10px",
        backgroundColor: "rgba(56, 56, 56, 0.55)",
        color: "white",
        border: "none",
        textDecoration: "none",
        transition: "0.3s ease",
        cursor: "pointer"}

    const navbar = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        width: "100%",
    }
    return (
        <>
        <header style = {header}>
            <h2>VOLTAGE PARADE</h2>
            <navbar style = {navbar}>
                <button style={button}>FACEBOOK</button>
                <button style = {button}>INSTAGRAM</button>
                <button style={button}>TIKTOK</button>
            </navbar>
        </header>
        </>
    )
}