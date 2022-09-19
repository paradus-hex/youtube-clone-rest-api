import { Stack } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { logo } from "../utils/constants.js"

const Navbar = () => {
  return (
   <Stack direction='row' alignItems='center' p={2} sx={{position:'sticky', background:'#000', top:0, justifyContent:'space-between'}}>
    <Link href='/'>
    <Image loader={()=>logo} src={logo} alt="logo" height={45} width={45}/>
    </Link>
   </Stack>
  )
}

export default Navbar 