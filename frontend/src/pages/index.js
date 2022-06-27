import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import Header from '@/components/inc/Header'
import Image from 'next/image'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div>
                <Header></Header>
                <div className='h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
                    <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6 dark:bg-gray-800'>
                        
                        <img src='/pic01.jpg' height="100" width="100" alt="img" className='h-24 mx-auto rounded-full ring-4 ring-green-400 sm:mx-0 sm:flex-shrink-0 hover:scale-105 duration-200'/>
                        <div className='text-center space-y-2 sm:text-left'>
                            <div className='space-y-0.5'>
                                <p className='text-lg text-black font-bold dark:bg-gray-300'>learn With Muhib</p>
                                <p className='text-gray-500 font-bold dark:bg-gray-400'>Youtube Channel</p>
                            </div>
                            <button className='btn-purple'>Visit Now</button>
                        </div>

                    </div>
                </div>
                

            </div>
        </>
    )
}
