import NavBar from "../Header/NavBar.tsx";
import { Outlet } from "react-router-dom";
import { FrameMotion } from "../motion/FrameMotion.tsx";

export function Layout(){

    return(
        <>
            <NavBar />
            <FrameMotion><Outlet /></FrameMotion>
        </>
    )
}