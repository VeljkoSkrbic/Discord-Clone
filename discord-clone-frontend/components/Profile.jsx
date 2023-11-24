'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import AuthButton from './AuthButton';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className='w-[100%] bg-profile h-auto p-2 flex'>
        <div>
          <img src={user.picture} alt={user.name} className='w-[50px] rounded-full'/>
        </div>
        <div className='text-white pl-5 '>
          {user.nickname}
          <AuthButton/>
        </div>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
}