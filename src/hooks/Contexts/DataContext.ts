import { createContext, useContext } from "react";
import type { Post, User } from "../../types";
import { data } from "../../data/data";

export const DataContext = createContext<{posts: Post[], users: User[]} | undefined>({posts: data.posts, users: data.users});

export const useData = () => {
    const context = useContext(DataContext);
    if(!context){
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}

