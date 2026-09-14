import type { Post, User } from "../../../types";

export function BlogPost({post, user}: {post: Post, user: User | undefined}){
    if(!user) return null;
    return(
        <li className="list-row py-10 px-5 flex gap-10 justify-around">
            <div className="flex flex-col justify-center gap-5">
                <div style={{ backgroundColor: user.color }} className="rounded-full w-15 h-15"></div>
                <h3>{user.username}</h3>
            </div>
            <div className="flex flex-col gap-2 w-2/3">
                <div className="text-left flex flex-col gap-2">
                        <h3 className="text-xl">{post.title}</h3>
                </div>
                <div className="text-left">
                    <p className="list-col-wrap text-md">
                        {post.content.substring(0, 60)}...
                    </p>
                    <span className="opacity-60 text-xs">Click post to read more...</span>
                </div>
            </div>
        </li>
    )
}