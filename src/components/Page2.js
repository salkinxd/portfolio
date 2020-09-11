import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

//? Import Styles
import "../styles/Page2.scss";
//! Import Components
import Erfahrung from "./Erfahrung";

const Page2 = ({ currentPage, setCurrentPage, transforms }) => {
    function toPage(e) {
        e = parseInt(e.target.value);
        setCurrentPage(e);
    }
    return (
        <section className={`Page2 page 2`} style={transforms[2]}>
            <div className="page-navigation">
                <h2>Erfahrung:</h2>
                <button className="prevButton" value={currentPage - 1} onClick={toPage}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{ pointerEvents: "none" }} />
                </button>
                <button className="nextButton" value={currentPage + 1} onClick={toPage}>
                    <FontAwesomeIcon icon={faChevronRight} style={{ pointerEvents: "none" }} />
                </button>
            </div>
            <Erfahrung currentPage={currentPage} />
        </section>
    );
};

export default Page2;
