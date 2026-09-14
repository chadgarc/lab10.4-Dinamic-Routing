import { Link } from "react-router";
import { data } from "../data/data.ts";

// Post index page, display a list of all available blog posts
export function Blog(){
    return(
        <ul className="list bg-base-100 rounded-box shadow-md">
            {data.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                    <li className="list-row">
                        <div>
                            <h1>{post.title}</h1>
                        </div>
                        <p className="list-col-wrap text-xs">
                            {post.content.substring(0, 100)} <span className="opacity-60">Read more...</span>
                        </p>
                    </li>
                </Link>
            ))}
        </ul>
    )
}