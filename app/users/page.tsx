import React from 'react'

const UsersPage = async() => {
      const res=await fetch('https://jsonplaceholder.typicode.com/users');
      // const res=await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:10}});
      const users:[{id:number,name:string}]=await res.json();
    return (
      <>
      <div>
          <h1>Users</h1>
          <p>{new Date().toLocaleTimeString()}</p>
          <ul>
              
          </ul>
          <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
    {users.map(users=>(
              <tr key={users.id}><td>{users.id}</td>
              <td>{users.name}</td></tr>
              ))}
    </tbody>
  </table>
</div>
      </div></>
    )
}

export default UsersPage