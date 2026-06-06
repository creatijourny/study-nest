'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between p-5'>
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
      <ul className='flex gap-3'>
        <li><Link href={'/profile'}>Profile</Link></li>
        <li><Link href={'/login'}>Login</Link></li>
        <li><Link href={'/signup'}>Sign Up</Link></li>        
      </ul>
    </nav>
  );
};

export default Navbar;