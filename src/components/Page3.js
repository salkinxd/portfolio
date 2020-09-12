import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBrain } from "@fortawesome/free-solid-svg-icons";

//? Import Styles
import "../styles/Page3.scss";
//! Import Components
import Kenntnisse from "./Kenntnisse";

const Page3 = ({ currentPage, setCurrentPage, transforms }) => {
    function toPage(e) {
        e = parseInt(e.target.value);
        setCurrentPage(e);
    }
    return (
        <section className={`Page3 page 3`} style={transforms[3]}>
            <div className="page-navigation">
                <h2>
                    <FontAwesomeIcon icon={faBrain} /> Kenntnisse:
                </h2>
                <button className="prevButton" value={currentPage - 1} onClick={toPage}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{ pointerEvents: "none" }} />
                </button>
            </div>
            <Kenntnisse currentPage={currentPage} />
        </section>
    );
};

export default Page3;
