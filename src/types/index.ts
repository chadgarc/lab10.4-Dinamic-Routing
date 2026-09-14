
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
    reactions?: Reactions
}

export interface AuthContextType {
    isAuth: boolean,
    login: () => void,
    logout: () => void
}