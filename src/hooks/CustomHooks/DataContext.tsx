import { useState } from "react";
import { DataContext } from "../Contexts/DataContext";
import type { Post, User } from "../../types";
import { data } from "../../data/data";

export const DataProvider = ({children}: {children: React.ReactNode}) => {
    const [posts, setPosts] = useState<Post[]>(data.posts);
    const [users, setUsers] = useState<User[]>(data.users);
    
    return (
        <DataContext.Provider value={{posts, users}}>
            {children}
        </DataContext.Provider>
    );
}