// import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import {Authorization} from "./authorizationPage";
import {MainPage} from "./MainPage";

function App() {
    
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Authorization/>}/>
                    <Route exact path="/main" element={<MainPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
