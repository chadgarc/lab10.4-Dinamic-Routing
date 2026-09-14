import { useParams } from "react-router";
import { data } from "../data/data";

export function Slug(){
    const { slug } = useParams();
    return(
        <>
            {data.filter((post) => post.slug === slug).map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            ))}
        </>
    )
}