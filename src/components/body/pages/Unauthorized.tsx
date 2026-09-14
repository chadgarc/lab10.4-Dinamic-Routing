
export function Unauthorized(){
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-5">
            <p className="text-xl">Admin page, access denied</p>
            <img src="https://http.cat/401" alt="Unauthorized access" />
        </div>
    )
}