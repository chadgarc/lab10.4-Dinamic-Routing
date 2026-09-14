import { useContext } from "react";
import { AuthContext } from "../../hooks/Contexts/AuthContext";
import { Link } from "react-router";

export function LoggedUser(){
    const {isAuth, logout, login} = useContext(AuthContext)

    return(
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                <a className="justify-between">
                    Profile
                </a>
                </li>
                {/* <li><a>Settings</a></li> */}
                {isAuth ? <li><Link to="/login">Logout</Link></li> 
                    : <li><Link to="/login">Login</Link></li>}
            </ul>
        </div>
    )
}
