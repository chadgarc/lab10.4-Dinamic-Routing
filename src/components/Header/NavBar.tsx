import { Link } from "react-router"
import { LoggedUser } from "./LoggedUser"

export default function NavBar()
    {
        return(
            <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1 flex justify-start">
                    <Link to="/blog"><a className="btn btn-ghost text-xl">Lab 10.4 - Dynamic Routing</a></Link>
                </div>
                <div className="flex gap-2">
                    <LoggedUser />
                </div>
            </div>
            </>
        )
}