import React from 'react'
interface Props{
  params:{id:number;
    photoid:number;}
}
const userId = ({params:{id,photoid}}:Props) => {
  return (
    <div>userId{id}{photoid}</div>
  )
}

export default userId