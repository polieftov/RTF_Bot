import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Authorization} from "./authorizationPage";
import {MainPage} from "./MainPage";
import React from "react";
import {StatisticsPage} from "./statisticsPage/StatisticsPage";

function App() {
    return (
        <>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Authorization/>}/>
                        <Route exact path="/main" element={<MainPage/>}/>
                        <Route path="/stat" element={<StatisticsPage/>}/>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
