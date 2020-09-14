import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Header = ({ currentPage, setCurrentPage }) => {
    function toPage(e) {
        e = parseInt(e.target.value);
        setCurrentPage(e);
    }
    return (
        <header>
            <div className="headline">
                <h1>Niklas</h1>
                <h2>Wonnebauer</h2>
            </div>
            <div className="right-arrow">
                <button onClick={toPage} value={currentPage + 1} tabIndex="2">
                    <FontAwesomeIcon icon={faChevronRight} style={{ pointerEvents: "none" }} />
                </button>
            </div>
        </header>
    );
};

export default Header;
