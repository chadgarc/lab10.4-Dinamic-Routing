import { Link, useParams } from "react-router";
import { useData } from "../../../hooks/Contexts/DataContext.ts";

export function Slug(){
    const { slug } = useParams();
    const { posts } = useData();

    const getPostBySlug = () => {
        return posts.find((post) => post.slug === slug);
    }

    return(
        <>
            <Link to={`/blog`}>
                <button className="btn btn-neutral hover:btn-primary w-20 ms-15 mt-10 flex justify-start">Back</button>
            </Link>
            {getPostBySlug() ?
            <div key={getPostBySlug().id} className="flex flex-col items-center gap-10 py-10">
                <h3 className="text-2xl text-left">{getPostBySlug().title}</h3>
                <p className="text-left w-2/3">{getPostBySlug().content}</p>
            </div> :
            <div className="flex flex-col items-center gap-10 py-10">
                <h1>Post not found</h1>
                <img src="https://http.cat/404" alt="Not found code" />
            </div>
            }
            
        </>
    )
}