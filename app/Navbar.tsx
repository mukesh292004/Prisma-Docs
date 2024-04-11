import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return ( 
    <div className='flex bg-slate-500 p-5 text-lg'>
        <Link href="/" className='mr-5'>Home</Link>
        <Link href="/users">User</Link>
    </div>
  )
}

export default Navbar