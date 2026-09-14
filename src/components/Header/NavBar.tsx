import { LoggedUser } from "./LoggedUser"
import { SearchBar } from "./SearchBar"

export default function NavBar()
    {
        return(
            <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex gap-2">
                    <SearchBar />
                    <LoggedUser />
                </div>
            </div>
            </>
        )
}