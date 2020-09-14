import React from "react";

//? Import Styles
import "../styles/Home.scss";

//! Import Components
import Header from "./Header";

const Home = ({ currentPage, setCurrentPage, transforms }) => {
    return (
        <section className={`Home page 0 ${currentPage === 0 ? "active" : ""}`} style={transforms[0]}>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </section>
    );
};

export default Home;
