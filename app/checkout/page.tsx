'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useStore } from "@/store/useStore"
import {useRouter} from 'next/navigation'


export default function Page(){
    const {setUser, user} = useStore()
    const router = useRouter()
    function handleSubmit(e : React.FormEvent){
        e.preventDefault()
        router.push('/payment')
    }
    return(
        <form onSubmit={handleSubmit} className='max-w-md mx-auto my-8 p-6 border rounded-lg shadow-lg bg-white'>
            <div className='flex flex-col gap-y-4'>
                <div>Enter your details for checkout.</div>
                <Input required className='border border-gray-300 rounded-md p-2' type='text' placeholder="Name" onChange={(e) => {
                    setUser({ ...user, name: e.target.value }) 
                }}></Input>
                <Input required className='border border-gray-300 rounded-md p-2' type='email' placeholder="Email" onChange={(e)=>{
                    setUser({...user, email : e.target.value})
                }}></Input>
                <Input required className='border border-gray-300 rounded-md p-2' type='phone' placeholder="Phone Number" onChange={(e)=>{
                    setUser({...user, phoneNumber : Number(e.target.value)}) 
                }}></Input>
            </div>
            <div>
                <Button className='w-full mt-4 text-white rounded-md p-2' type='submit'>
                    Proceed to payment
                </Button>
            </div>
        </form>
    )
}