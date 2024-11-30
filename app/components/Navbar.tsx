"use client"
import {Primarybutton} from './buttons/index'
import { Logo } from './logo/index'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();
  return (
    <div className='flex justify-between '>
        <Logo>Research portal</Logo>
        <div className="">
            <Primarybutton onClick={()=>{router.push("/auth/signin")}}> Singin </Primarybutton>
            <Primarybutton onClick={()=>{router.push("/auth/signup")}}>Signup</Primarybutton>
        </div>
        
    </div>
  )
}

export default Navbar