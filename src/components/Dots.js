import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faCircle } from "@fortawesome/free-solid-svg-icons";

//? Import Styles
import "../styles/Dots.scss";

const Dots = ({ currentPage, setCurrentPage }) => {
    function toPage(e) {
        e = parseInt(e.target.value);
        setCurrentPage(e);
    }
    return (
        <div className="Dots">
            <ul>
                <li>
                    <button value={0} onClick={toPage}>
                        <FontAwesomeIcon icon={currentPage === 0 ? faDotCircle : faCircle} style={{ pointerEvents: "none" }} />
                    </button>
                </li>
                <li>
                    <button value={1} onClick={toPage}>
                        <FontAwesomeIcon icon={currentPage === 1 ? faDotCircle : faCircle} style={{ pointerEvents: "none" }} />
                    </button>
                </li>
                <li>
                    <button value={2} onClick={toPage}>
                        <FontAwesomeIcon icon={currentPage === 2 ? faDotCircle : faCircle} style={{ pointerEvents: "none" }} />
                    </button>
                </li>
                <li>
                    <button value={3} onClick={toPage}>
                        <FontAwesomeIcon icon={currentPage === 3 ? faDotCircle : faCircle} style={{ pointerEvents: "none" }} />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Dots;
