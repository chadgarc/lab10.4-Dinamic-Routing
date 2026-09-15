import { Link, useParams } from "react-router-dom";
import { useData } from "../../../hooks/Contexts/DataContext.ts";
import type { Post } from "../../../types";

export function Slug(){
    const { slug } = useParams();
    const { posts } = useData();

    const post = posts.find((p: Post) => p.slug === slug);

    return(
        <>
            <Link to={`/blog`}>
                <button className="btn btn-neutral hover:btn-primary w-20 ms-15 mt-10 flex justify-start">Back</button>
            </Link>
            {post ?
            <div key={post.id} className="flex flex-col items-center gap-10 py-10">
                <h3 className="text-2xl text-left">{post.title}</h3>
                <p className="text-left w-2/3">{post.content}</p>
            </div> :
            <div className="flex flex-col items-center gap-10 py-10">
                <h1>Post not found</h1>
                <img src="https://http.cat/404.jpg" alt="Not found code" />
            </div>
            }
        </>
    )
}
