import { getServerSession } from "next-auth"
import Link from "next/link"
import { authOptions } from "~/server/auth"

async function LoginButton() {
  const session = await getServerSession(authOptions)
  return (
    <Link
      href={session?.user ? "api/auth/signout?callbackUrl=/" : "api/auth/signin?callbackUrl=/dashboard"}
      className="rounded-full  bg-gradient-to-r from-[#2e026d] to-teal-500 px-10 py-3 font-semibold text-white no-underline hover:transition hover:hover:bg-gradient-to-r" >
      {session ? "Sign out" : "Sign in"}
    </Link>
  )
}


export function Login() {
  return (
    <div className="flex justify-end p3 bg-black">
        <LoginButton />
    </div>
  )
}
