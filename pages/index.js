import { Inter } from 'next/font/google'
import Layout from "@/components/Layout"
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data: session} = useSession();

  return <Layout>
    <div className='text-blue-900 flex justify-between'>
      <h2>Hello, {session?.user?.email}</h2>

      <div className='flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden'>
        <img src={session?.user?.image} alt='me' className='w-6 h-6'/>
        <span className='px-2'>
          {session?.user?.name}
        </span>
      </div>
      
    </div>
  </Layout>
}
