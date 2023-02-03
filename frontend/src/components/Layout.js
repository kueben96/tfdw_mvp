import { Outlet } from "react-router-dom";
import React from 'react'
import Header from "./navigation/header";
import Footer from "./navigation/footer"


const Layout = () => {
    return (
        <div>
            <Header />
            <main className="App">
                <Outlet />
            </main>
            <Footer />
        </div>


    )
}

export default Layout;