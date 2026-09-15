import { useData } from "../../../hooks/Contexts/DataContext.ts";
import type { Post, User } from "../../../types";
import { BlogPost } from "../elements/BlogPost.tsx";
import { Link } from "react-router-dom";

export function Blog(){
    const { posts, users } = useData();

    return(
        <ul className="list bg-base-100 rounded-box shadow-md">
            {posts.map((post: Post) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                    <BlogPost post={post} user={users.find((user: User) => user.id === post.userId)}/>
                </Link>
            ))}
        </ul>
    )
}
