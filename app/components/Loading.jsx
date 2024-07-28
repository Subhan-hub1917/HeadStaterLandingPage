'use client';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const page = () => {
    const router=useRouter();
    useEffect(()=>{
        router.push('/sign-up')
    })
  return (
    <div></div>
  )
}

export default page