import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 font-sansita font-bold'>
      <ul>
        <li>
          <Link className='font-black text-green-950' href='/login'>
            Login page
          </Link>
        </li>
        <li>
          <Link className='font-black text-green-950' href='/register'>
            Register page
          </Link>
        </li>
      </ul>
      <Image
        src='https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='outsideImage'
        width={1280}
        height={200}
        quality={0}
        priority
        title='outsideImage'
      />
    </main>
  )
}
