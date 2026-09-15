import { useState } from "react";
import { DataContext } from "../Contexts/DataContext";
import type { Post, User } from "../../types";
import { data } from "../../data/data";

export const DataProvider = ({children}: {children: React.ReactNode}) => {
    const [_posts, _setPosts] = useState<Post[]>(data.posts);
    const [_users, _setUsers] = useState<User[]>(data.users);
    
    return (
        <DataContext.Provider value={{posts: _posts, users: _users}}>
            {children}
        </DataContext.Provider>
    );
}
