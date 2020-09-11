import React from "react";

//? Import Styles
import "../styles/PrevNext.scss";

const PrevNext = ({ currentPage, setCurrentPage }) => {
    return (
        <div className={"PrevNext " + showHide()}>
            <div className="innerButtons"></div>
        </div>
    );
};

export default PrevNext;
