import {useState, useEffect} from "react";
import BazarControlls from "./components/BazarControlls";
import AllListings from "./pages/AllListings"

import {Link, Routes, Route, Router} from "react-router";
import NewListing from "./pages/NewListing";

function App() {
    return (
        <article className="container">
            <nav className="d-flex align-items-center">
                <img src="https://i.guim.co.uk/img/media/c60c4f8ab60936ac7c1951cdc92b6be280c97ef2/0_645_4008_2772/master/4008.jpg?width=465&dpr=1&s=none&crop=none"
                     alt=""
                width="200px"/>
                <h1>Párek bazar</h1>
            </nav>

            <BazarControlls />

                <Routes>
                    <Route path="/" element={<AllListings />}/>
                    <Route path="/newListing" element={<NewListing />}/>
                </Routes>
        </article>
    )

}

export default App;
