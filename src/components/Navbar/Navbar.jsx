import "./navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () => { 
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="logo" className="navbar-logo-img"/>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;