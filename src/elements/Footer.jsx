function Footer(){
    const icon = {
        width: "100%",
        height: "100%"};

    const footer = {
        bottom: "0"
    }
    const CurrentYear = new Date().getFullYear();

    return (
        <footer style = {footer} className="top-bottom-elements">
            <p>©{CurrentYear} Voltage Parade</p>
            <p>voltageparade@gmail.com</p>
            <p>+447395529968</p>
        </footer>
    )
}

export default Footer