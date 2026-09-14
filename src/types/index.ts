
export interface Reactions{
    likes: number,
    dislikes: number
}


export interface Post{
    id: number,
    title: string,
    slug: string,
    content: string,
    userId?: number,
    user?: User,
    reactions?: Reactions
}

export interface User {
    id: number,
    username: string,
    color: string
}

export interface AuthContextType {
    isAuth: boolean,
    login: () => void,
    logout: () => void
}