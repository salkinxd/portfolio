import React from "react";

//? Import Images
import ich from "./images/ich.jpg";
const Ueber = ({ currentPage }) => {
    return (
        <div className={`info ${currentPage === 1 ? "active" : ""}`}>
            <img src={ich} alt="Niklas Wonnebauer" className="me-img" />
            <ul>
                <li>
                    <h3>
                        <b>Name:</b>{" "}
                        <a target="_blank" rel="noopener noreferrer" href="https://salkin.at/">
                            Niklas Wonnebauer
                        </a>
                    </h3>
                </li>
                <li>
                    <h4>
                        <b>Wohnsitz:</b>{" "}
                        <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/aqeixHhAmpUTL4g98">
                            Taxham, Salzburg
                        </a>
                    </h4>
                </li>
                <li>
                    <h4>
                        <b>Staatsbürgerschaft:</b> Österreich
                    </h4>
                </li>
                <li>
                    <h4>
                        <b>Geburtsdatum:</b> 21/04/2000
                    </h4>
                </li>
                <li>
                    <h4>
                        <b>Tel: </b>
                        <a href="tel:+436642338574">+43 664 2338574</a>
                    </h4>
                </li>
                <li>
                    <h4>
                        <b>E-Mail: </b>
                        <a href="mailto:nwonne@gmail.com">nwonne@gmail.com</a>
                    </h4>
                </li>
            </ul>
        </div>
    );
};

export default Ueber;
