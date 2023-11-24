'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function AuthButton() {
  const { user } = useUser();

  return user ? (
    <div className='flex '>
      <a className=" text-white" href="/api/auth/logout">Logout</a>
    </div>
  ) : (
    <div>
      <a className=" text-white" href="/api/auth/login">Login</a>
    </div>
  );
}