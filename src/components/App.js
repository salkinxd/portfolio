import React, { useState, useEffect } from "react";

//? Import Styles
import "react-bootstrap";
import "../styles/App.scss";

//! Import Components
import Nav from "./Nav";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Dots from "./Dots";

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [maxPages, setMaxPages] = useState(3);
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [transforms, setTransforms] = useState([
        { transform: "translateX(0)", height: window.innerHeight, width: window.innerWidth },
        { transform: "translateX(100%)", height: window.innerHeight, width: window.innerWidth },
        { transform: "translateX(200%)", height: window.innerHeight, width: window.innerWidth },
        { transform: "translateX(300%)", height: window.innerHeight, width: window.innerWidth },
    ]);
    function onScroll(e) {
        if (e.target.class !== "info") {
            if (e.deltaY > 0) {
                setCurrentPage(currentPage + 1);
            } else if (e.deltaY < 0 && currentPage > 0) {
                setCurrentPage(currentPage - 1);
            }
        }
    }
    useEffect(() => {
        if (currentPage < 0) {
            setCurrentPage(0);
        }
        if (currentPage > maxPages) {
            setCurrentPage(maxPages);
        }
        switch (currentPage) {
            case 0:
                setTransforms([
                    { transform: "translateX(0%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(100%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(200%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(300%)", height: innerHeight, width: innerWidth },
                ]);
                break;
            case 1:
                setTransforms([
                    { transform: "translateX(-100%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(0%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(100%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(200%)", height: innerHeight, width: innerWidth },
                ]);
                break;
            case 2:
                setTransforms([
                    { transform: "translateX(-200%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(-100%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(0%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(100%)", height: innerHeight, width: innerWidth },
                ]);
                break;
            case 3:
                setTransforms([
                    { transform: "translateX(-300%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(-200%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(-100%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(0%)", height: innerHeight, width: innerWidth },
                ]);
                break;
            default:
                setTransforms([
                    { transform: "translateX(0%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(100%)", height: innerHeight, width: innerWidth },
                    { transform: "translateX(200%)", height: innerHeight, width: innerWidth },
                ]);
                break;
        }
    }, [currentPage, maxPages, innerHeight, innerWidth]);

    window.addEventListener("resize", () => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
    });
    var deltaX = 0;
    function touchStartHandler(e) {
        deltaX = e.changedTouches[0].clientX;
    }
    function touchMoveHandler(e) {}
    function touchEndHandler(e) {
        if (deltaX > e.changedTouches[0].clientX) {
            setCurrentPage(currentPage + 1);
        } else if (deltaX < e.changedTouches[0].clientX) {
            setCurrentPage(currentPage - 1);
        }
    }
    return (
        <main onWheel={onScroll} onTouchStart={touchStartHandler} onTouchMove={touchMoveHandler} onTouchEnd={touchEndHandler}>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={maxPages} setMaxPages={setMaxPages} />
            <div className="content">
                <Home currentPage={currentPage} setCurrentPage={setCurrentPage} transforms={transforms} />
                <Page1 currentPage={currentPage} setCurrentPage={setCurrentPage} transforms={transforms} />
                <Page2 currentPage={currentPage} setCurrentPage={setCurrentPage} transforms={transforms} />
                <Page3 currentPage={currentPage} setCurrentPage={setCurrentPage} transforms={transforms} />
                <Dots currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </main>
    );
};

export default App;
