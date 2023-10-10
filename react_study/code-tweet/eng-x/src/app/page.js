import Image from 'next/image'

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from "next/navigation"

export default async function Home() {
  const supabase = createServerComponentClient({cookies})
  const { data: session } = await supabase.auth.getSession()

  console.log(".....", session)

  if(session.session == null) {
    redirect("/login")
  }

  const { data: posts } = await supabase.from('posts').select("*")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      <div>
        {posts.map(post => (<p> {JSON.stringify(post)} </p>))}
      </div>
    </main>
  )
}
