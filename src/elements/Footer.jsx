function Footer(){
    const button = {
        width: "10%",
        height: "10%",
        margin: "0 5px",
        border: 'none'
    };
    const icon = {
        width: "100%",
        height: "100%"};

    const CurrentYear = new Date().getFullYear();

    return (
        <footer className="top-bottom-elements">
            <p>©{CurrentYear} Voltage Parade</p>
            <p>voltageparade@gmail.com</p>
            <p>+447395529968</p>
        </footer>
    )
}

export default Footer