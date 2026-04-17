export default function Friend({friend}){
    // console.log(friend);
    const {id} = friend;
    const {userId} = friend;

    return(
        <div className="card">
            <h3>ID : {id}</h3>
            <h3>User ID: {userId}</h3>
        </div>
    )
}