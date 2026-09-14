import NavBar from "../Header/NavBar.tsx";
import { Outlet } from "react-router";

export function Layout(){

    return(
        <>
            <NavBar />
            <Outlet />
        </>
    )
}