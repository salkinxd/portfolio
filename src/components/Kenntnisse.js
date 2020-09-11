import React from "react";

const Kenntnisse = ({ currentPage }) => {
    return (
        <div className={`info ${currentPage === 3 ? "active" : ""}`}>
            <div className="sprachen">
                <h3>Sprachen</h3>
                <ul>
                    <li>
                        Deutsch (<i>Muttersprache</i>)
                    </li>
                    <li>
                        Englisch (<i>Fliesend in Wort und Schreiben</i>)
                    </li>
                </ul>
            </div>
            <div className="koennen">
                <h3>EDV Kenntnisse</h3>
                <ul>
                    <li>
                        <b>Programmiersprachen</b>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                        </ul>
                    </li>
                    <li>
                        <b>Programme</b>
                        <ul>
                            <li>
                                Adobe CC (<i>After Effects, Premiere Pro, Illustrator, Photoshop</i>)
                            </li>
                            <li>Maya</li>
                            <li>Blender</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Kenntnisse;
