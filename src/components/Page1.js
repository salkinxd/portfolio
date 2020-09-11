import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

//? Import Styles
import "../styles/Page1.scss";
//! Import Components
import Ueber from "./Ueber";

const Page1 = ({ currentPage, setCurrentPage, transforms }) => {
    function toPage(e) {
        e = parseInt(e.target.value);
        setCurrentPage(e);
    }
    return (
        <section className={`Page1 page 1`} style={transforms[1]}>
            <div className="page-navigation">
                <h2>Über mich:</h2>
                <button className="prevButton" value={currentPage - 1} onClick={toPage}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{ pointerEvents: "none" }} />
                </button>
                <button className="nextButton" value={currentPage + 1} onClick={toPage}>
                    <FontAwesomeIcon icon={faChevronRight} style={{ pointerEvents: "none" }} />
                </button>
            </div>
            <Ueber currentPage={currentPage} />
        </section>
    );
};

export default Page1;
