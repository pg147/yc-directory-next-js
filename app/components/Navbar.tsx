"use client"
// React imports
import React from 'react'

// Next.js imports
import Image from 'next/image';
import Link from 'next/link'

// Next-Auth
import { signOut, signIn, useSession } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href={'/'}>
          <Image 
            src={'/logo.png'}
            alt='logo'
            height={40}
            width={144}
            quality={100}
            className='size-fit'
          />
        </Link>

        <div className='flex items-center space-x-6'>
          {session && session?.user ? (
            <>
              <Link href={'/create'}>
                <span>Create</span>
              </Link>

              <button onClick={() => signOut()}>
                Sign out
              </button>

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={() => signIn('github')}>
              Sign in
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
