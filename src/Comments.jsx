import { use } from "react";
import Comment from "./Comment";

export default function Comments({commentsPromise}){
    const comments = use(commentsPromise);
    return(
        <div className="card">
            <h2>All Comments are Here : {comments.length}</h2>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }

        </div>
    )
}