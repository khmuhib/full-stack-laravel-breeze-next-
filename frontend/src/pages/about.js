import React from 'react'
import Header from '@/components/inc/Header'
import Head from 'next/head'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function about() {
  return (
    <>
    <Head>
      <title>About</title>
    </Head>

    <Header></Header>
    <h1>about</h1>
    </>
  )
}

export default about