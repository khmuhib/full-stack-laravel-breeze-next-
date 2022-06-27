import Head from 'next/head'
import Header from '../../components/inc/Header.js'
import Footer from '../../components/inc/Footer.js'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>


            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
