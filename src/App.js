
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Component/Navbar";
import Protected from "./Component/Protected";
import Home from "./Component/Home";
import About from "./Component/About";
import Profile from "./Component/Profile";
function App() {
    const [isLoggedIn, setisLoggedIn] = useState(null);
    const logIn = () => {
        setisLoggedIn(true);
    };
    const logOut = () => {
        setisLoggedIn(false);
    };
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                {isLoggedIn ? (
                    <button style={{ marginTop: 60 }} onClick={logOut}>Logout</button>
                ) : (
                    <button style={{ marginTop: 60 }} onClick={logIn}>Login</button>
                )}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile'
                        element={
                            <Protected isLoggedIn={isLoggedIn}>
                                <Profile />
                            </Protected>
                        }
                    />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
