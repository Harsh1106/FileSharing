import React from 'react'
import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { SignedIn } from '@clerk/nextjs'

function Files() {
  return (
    <div>Files
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  )
}

export default Files