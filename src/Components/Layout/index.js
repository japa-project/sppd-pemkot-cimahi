import { useRef } from "react"
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
    const mainRef = useRef();
    return (
        <>
            <Sidebar />
            <div ref={mainRef} className="transition-all duration-500 ease-in-out">
                <Navbar />
                <div className="bg-gradient-to-b from-[#68902dd9] to-white w-full h-screen">
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}