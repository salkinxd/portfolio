import React from "react";

const Erfahrung = ({ currentPage }) => {
    return (
        <div className={`info ${currentPage === 2 ? "active" : ""}`}>
            <div className="schulerfahrung">
                <h3>Schulbildung & Weiterbildung</h3>
                <ul>
                    <li>
                        <b>09/2010 - 07/2015:</b> Christian Doppler Realgymnasium Salzburg
                    </li>
                    <li>
                        <b>09/2006 – 07/2010:</b> Alfred Bäck Volksschule Salzburg
                    </li>
                    <br />
                    <li>
                        <b>11/2019:</b> Ausbildung zum PC Administrator am WIFI Salzburg
                    </li>
                    <li>
                        <b>04/2020:</b> Ausbildung zum Netzwerk Admin. am WIFI Salzburg
                    </li>
                </ul>
            </div>
            <div className="arbeitserfahrung">
                <h3>Praktische Erfahrung</h3>
                <ul>
                    <li>
                        <b>2018/2020:</b> “Freelance” Webdesign
                    </li>
                    <li>
                        <b>2016:</b> Probetage bei Firma FreshFX als 3D-Artist
                    </li>
                    <li>
                        <b>2016:</b> 1 Woche Praktikum als Netzwerkassistent bei dm Drogerie Markt GmbH Filialenzentrale, Wals Siezenheim
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Erfahrung;
