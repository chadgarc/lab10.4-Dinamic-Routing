import { LoggedUser } from "./LoggedUser"

export default function NavBar()
    {
        return(
            <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1 flex justify-start">
                    <a className="btn btn-ghost text-xl">Lab 10.4 - Dynamic Routing</a>
                </div>
                <div className="flex gap-2">
                    <LoggedUser />
                </div>
            </div>
            </>
        )
}