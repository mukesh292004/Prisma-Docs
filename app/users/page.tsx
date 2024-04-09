import React from 'react'

const UsersPage = async() => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'});
    // const res=await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:10}});
    const users:[{id:number,name:string}]=await res.json();
  return (
    <>
    <div>
        <h1>Users</h1>
        <ul>
            {users.map(users=>(
            <li key={users.id}>{users.name}</li>
            ))}
        </ul>
    </div></>
  )
}

export default UsersPage