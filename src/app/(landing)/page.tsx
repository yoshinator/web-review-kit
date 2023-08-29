import { Button } from '@/components/ui/button'
import Link from 'next/link'

const landingPage = () => {
  return (
    <div>
      <h1>Landing Page (Unprotected)</h1>
      <Link href='/sign-in'>
        <Button>Sign In</Button>
      </Link>
      <Link href='/sign-up'>
        <Button>Sign Up</Button>
      </Link>
    </div>
  )
}
export default landingPage