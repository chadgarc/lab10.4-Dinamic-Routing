import { Link, useParams } from "react-router";
import { useData } from "../../../hooks/Contexts/DataContext.ts";

export function Slug(){
    const { slug } = useParams();
    const { posts } = useData();

    return(
        <>
            <Link to={`/blog`}>
                <button className="btn btn-neutral hover:btn-primary w-20 ms-15 mt-10 flex justify-start">Back</button>
            </Link>
            {posts.filter((post) => post.slug === slug).map((post) => (
                <div key={post.id} className="flex flex-col items-center gap-10 py-10">
                    <h3 className="text-2xl text-left">{post.title}</h3>
                    <p className="text-left w-2/3">{post.content}</p>
                </div>
            ))}
        </>
    )
}