
import Link from 'next/link'
import Product from './components/Product';

export default function Home() {
  return (
    <div className='p-5'>
      <h1>Home</h1>
<Link href="/users">New</Link>
<Product></Product>
    </div>
  )
}
