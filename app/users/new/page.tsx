'use client';
import { useRouter } from 'next/navigation'

import React from 'react'

const NewUse = () => {
  const route=useRouter();
  return (
    <div>
      <button className='bg-blue-500 text-white p-2 rounded' onClick={()=>{route.push('/users')}}>Submit</button>
    </div>
  
  )
}

export default NewUse