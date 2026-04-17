export default function Comment({comment}){
    return(
        <div>
            <h4>ID : {comment.id}</h4>
            <h4>UserID : {comment.userId}</h4>
            <h4>Name : {comment.name}</h4>
            <h4>Email : {comment.email}</h4>
        </div>
    )
}