import { useContext } from "react";
import { AuthContext } from "../../../hooks/Contexts/AuthContext";

export function Admin(){
    const { isAuth } = useContext(AuthContext);
    return(
        <div className="flex justify-center items-center min-h-screen">
            {isAuth &&
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">Welcome to the Admin Dashboard.</h1>
                <p>Site under maintenance</p>
            </div>
            }
        </div>
    )
}
