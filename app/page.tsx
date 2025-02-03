'use client'

import Image from "next/image";
import {Services} from '@/data/data'
import ServiceCard from '@/components/ServiceCard'
import {Dialog,DialogTrigger} from '@/components/ui/dialog'
import Cart from '@/components/Cart'
import {useStore} from '@/store/useStore'
import {Input} from '@/components/ui/input'
import { useEffect, useState } from "react" 
import {useRouter} from 'next/navigation'

export default function Home(){
  const {addItem} = useStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [services,setServices] = useState(Services) 
  const router = useRouter()

  useEffect(()=>{
    setServices(Services.filter((service)=>service.name.toLowerCase().includes(searchQuery.toLowerCase())))
  },[searchQuery])  

  return(
    <div className="m-4">
      <div className='flex flex-row justify-between items-center m-4'>
        <div className='cursor-pointer hover:underline text-lg' onClick={()=>{router.push('/')}}>Services</div>
        <div className='cursor-pointer hover:underline text-lg px-2' onClick={()=>{router.push('/analytics')}}>Analytics</div>
        <div className="flex-1 mx-8">
          <Input className='rounded-md w-full' type='text' placeholder="Search for services" onChange={(e)=>{setSearchQuery(e.target.value)}}></Input> 
        </div>
        <div>
        <Dialog>
          <DialogTrigger asChild>
            <Image className="cursor-pointer" src='/shopping-cart.png' height={48} width={48} alt='Image not found'></Image>
          </DialogTrigger>
          <Cart/>
        </Dialog>
        </div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service,idx)=> <ServiceCard key={idx} service={service} handleAddItem={addItem}></ServiceCard> )}
        </div> 
    </div>
  )
}