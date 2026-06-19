'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

  const {
    data: session,
  } = authClient.useSession()

  const user = session?.user
  console.log(user);

  return (
    <nav className='flex items-center justify-between p-5'>
      <div>
        <h2 className='text-3xl font-bold'><span className='text-[#2D3748]'>Study</span><span className='text-teal-500'>Nest</span></h2>
      </div>
      <ul className='flex gap-3'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/rooms'}>Rooms</Link></li>
        <li><Link href={'/add-room'}>Add Room</Link></li>
        <li><Link href={'/my-bookings'}>My Bookings</Link></li>
      </ul>
      {/* <div>
        <Image 
        src={'/assets/mypic.jpg'}
        height={150}
        width={150}
        alt='logo'/>
      </div> */}
      <ul className='flex items-center gap-3'>
        <li><Link href={'/profile'}>Profile</Link></li>
        {user ? <>
          <li>
            <Avatar>
        <Avatar.Image alt={user.name} src={user?.image} />
        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
      </Avatar>
        </li>
        <li></li>
      </> : <>
        <li><Link href={'/login'}>Login</Link></li>
        <li><Link href={'/signup'}>Sign Up</Link></li>
      </>  }
    </ul>
    </nav >
  );
};

export default Navbar;