import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faHome, faBook, faBrain } from "@fortawesome/free-solid-svg-icons";

//? Import Styles
import "../styles/Nav.scss";

const Nav = ({ setCurrentPage }) => {
    const [openNav, setOpenNav] = useState(false);

    function goToPage(e) {
        e = parseInt(e.target.value);
        setCurrentPage(e);
        toggleNav();
    }
    function toggleNav() {
        setOpenNav(!openNav);
    }
    return (
        <div className={`nav-container ${openNav ? "open" : ""}`}>
            <div className={`page-list ${openNav ? "open" : ""}`}>
                <ul className={openNav ? "open" : ""}>
                    <li>
                        <button onClick={goToPage} value={0} tabIndex="2">
                            <FontAwesomeIcon icon={faHome} style={{ pointerEvents: "none" }} />
                            <h3 style={{ pointerEvents: "none" }}>Home</h3>
                        </button>
                    </li>
                    <li>
                        <button value={1} onClick={goToPage}>
                            <FontAwesomeIcon icon={faUser} style={{ pointerEvents: "none" }} />
                            <h3 style={{ pointerEvents: "none" }}>Über mich</h3>
                        </button>
                    </li>
                    <li>
                        <button value={2} onClick={goToPage}>
                            <FontAwesomeIcon icon={faBook} style={{ pointerEvents: "none" }} />
                            <h3 style={{ pointerEvents: "none" }}>Erfahrung</h3>
                        </button>
                    </li>
                    <li>
                        <button value={3} onClick={goToPage}>
                            <FontAwesomeIcon icon={faBrain} style={{ pointerEvents: "none" }} />
                            <h3 style={{ pointerEvents: "none" }}>Kenntnisse</h3>
                        </button>
                    </li>
                </ul>
            </div>
            <nav className={openNav ? "open" : ""}>
                <button onClick={toggleNav} tabIndex="1" className="openButton">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <h4>Navigation</h4>
            </nav>
        </div>
    );
};

export default Nav;
