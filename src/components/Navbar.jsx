'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: session,
  } = authClient.useSession()

  const user = session?.user
  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  }

  return (
    <nav className='flex items-center justify-between p-5'>
      <div>
        <h2 className='text-3xl font-bold'><span className='text-[#2D3748]'>Study</span><span className='text-teal-500'>Nest</span></h2>
      </div>     
      <ul className="hidden md:flex gap-6 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/rooms">Rooms</Link></li>
          <li><Link href="/add-room">Add Room</Link></li>
          <li><Link href="/my-bookings">My Bookings</Link></li>
        </ul>
        
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>     

      
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 border-t pt-4 font-medium">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/rooms" onClick={() => setIsOpen(false)}>
              Rooms
            </Link>
          </li>
          <li>
            <Link href="/add-room" onClick={() => setIsOpen(false)}>
              Add Room
            </Link>
          </li>
          <li>
            <Link href="/my-bookings" onClick={() => setIsOpen(false)}>
              My Bookings
            </Link>
          </li>
        </ul>
      )}   
  

    
      <ul className='flex items-center gap-3'>
        <li><Link href={'/profile'}>Profile</Link></li>
        {user ? <>
          <li>
            <Avatar>
        <Avatar.Image referrerPolicy='no-referrer' alt={user.name} src={user?.image} />
        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
      </Avatar>
        </li>
        <li>
          <Button onClick={handleSignOut} variant='danger' className={'rounded-none'}>Logout</Button>
        </li>
      </> : <>
        <li><Link href={'/login'}>Login</Link></li>
        <li><Link href={'/signup'}>Sign Up</Link></li>
      </>  }
    </ul>
    </nav >
  );
};

export default Navbar;