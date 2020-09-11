import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

//? Import Styles
import "../styles/Home.scss";

const Home = ({ currentPage, setCurrentPage, transforms }) => {
    function toPage(e) {
        e = parseInt(e.target.value);
        setCurrentPage(e);
    }
    return (
        <section className={`Home page 0 ${currentPage === 0 ? "active" : ""}`} style={transforms[0]}>
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
        </section>
    );
};

export default Home;
