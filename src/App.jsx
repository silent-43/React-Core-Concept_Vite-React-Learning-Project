import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import Friends from './Friends'
import Albums from './Albums'
import Comments from './Comments'
import Players from './Players'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=> res.json())

  const fetchFriends = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  }

  const fetchAlbums = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    return res.json();
  }


   const fetchComments = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    return res.json();
   }


function App() {

  const friendsPromise = fetchFriends();
  const albumsPromise = fetchAlbums();
  const commentsPromise = fetchComments();



  function handleClick() {
    alert('I am CLicked')
  }

  const handleClick3 = () => {
    alert('Cliked 3')
  }


  const handleAdd5 = (num) => {
    const newNUm = num + 5;
    alert(newNUm)
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Players></Players>


      <Suspense fallback={<h4>Comments are Coming..............</h4>}>
      <Comments commentsPromise={commentsPromise}></Comments>
      </Suspense>

      <Suspense fallback={<h4>Albums are coming..........!</h4>}>
        <Albums albumsPromise={albumsPromise}></Albums>
      </Suspense>


      <br />

      <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>

      </Suspense>

      <br />

      <Counter></Counter>

      <br />

      <Batsman></Batsman>

      <br />



      <div className='clickstyle'>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={function handleClick2() {
          alert('Clicked 2')
        }}>Click Me2</button>
        <button onClick={handleClick3}>Click Me 3</button>
        <button onClick={() => alert('Clicked 4')}>Click Me 4</button>
        <button onClick={() => handleAdd5(7)}>Click Me 5</button>
      </div>

    </>
  )
}

export default App
