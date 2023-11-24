import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';
import AuthButton from './AuthButton';

function Login () {

  return (
    <div className=''>
      <AuthButton/>
    </div>
  )
}
export default Login;