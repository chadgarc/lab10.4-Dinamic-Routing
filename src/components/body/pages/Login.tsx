import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/Contexts/AuthContext";

export function Login(){
    const {login} = useAuth();
    
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 h-100 flex flex-col justify-around">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Welcome back</h2>
                <p className="mb-6 text-center text-2xl">Bryan</p>
                
                <form className="space-y-4">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                        <Link to="/blog" onClick={login}>Login using Passkey</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}