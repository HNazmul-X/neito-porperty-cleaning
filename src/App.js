import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/navbar/Navbar";
import AppRouter from "./Router/AppRouter";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <AppRouter />

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
