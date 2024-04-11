import { sort } from 'fast-sort';
import Link from 'next/link';
import React, { Suspense } from 'react'

const UsersPage = async({searchParams:{sortOrder}}:{searchParams:{sortOrder:string}}) => {
      const res=await fetch('https://jsonplaceholder.typicode.com/users');
      // const res=await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:10}});
      const users: { id: number; name: string; email: string; }[] = await res.json();
      // implemnet sort based on the sort order based on the alphabet of names 
      //Invalid sort config: Expected `asc` or `desc` property
    const sorteduser=  sort(users).asc(sortOrder==='email'?user=>user.email:user=>user.name);
    return (
      <>
      <div>
          <h1>Users</h1>
          <p>{new Date().toLocaleTimeString()}</p>
          <button className='bg-blue-500 text-white p-2 rounded'><Link href="/users/new">New User</Link></button>
          <ul>
              
          </ul>
          <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th><Link href="/users?sortOrder=id">ID</Link></th>
        <th><Link href="/users?sortOrder=name">Name</Link></th>
        <th><Link href="/users?sortOrder=email">Email</Link></th>
        
      </tr>
    </thead>
    <tbody>
      <Suspense fallback={<div>Loading...</div>}>
    {sorteduser.map(users=>(
              <tr key={users.id}><td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.email}</td></tr>
              ))}
              </Suspense>
    </tbody>
  </table>
</div>
      </div></>
    )
}

export default UsersPage