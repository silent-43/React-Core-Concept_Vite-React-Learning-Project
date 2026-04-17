export default function Album({album}){
    return(
        <div>
            <p>ID : {album.id}</p>
            <p>UserID : {album.userId}</p>
            <p>Title : {album.title}</p>
        </div>
    )
}