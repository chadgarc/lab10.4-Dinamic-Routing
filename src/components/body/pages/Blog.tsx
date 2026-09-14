import { Link } from "react-router";
import { BlogPost } from "../elements/BlogPost.tsx";
import { useContext } from "react";
import { DataContext } from "../../../hooks/Contexts/DataContext.ts";

// Post index page, display a list of all available blog posts
export function Blog(){

    const {posts, users} = useContext(DataContext);

    return(
        <ul className="list bg-base-100 rounded-box shadow-md">
            {posts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                    <BlogPost post={post} user={users.find((user) => user.id === post.userId)}/>
                </Link>
            ))}
        </ul>
    )
}