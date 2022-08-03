import airbnb_logo from '../images/Airbnb-Logo.png'
function NavBar () {
    return(
        <nav className="NavBar">
            <img src={airbnb_logo} alt="Airbnb logo." className="nav--logo"/>
        </nav>
    );
}

export default NavBar;