'use client'

import { Button } from "@/components/ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {useStore} from '@/store/useStore'
import {useRouter} from 'next/navigation' 
import { Plus,Minus } from "lucide-react"
import Image from 'next/image'

export default function Cart() { 
    const {cartItems,removeItem,addItem} = useStore()
    const router = useRouter()
    const cartTotal = cartItems === null ? 0 : cartItems.reduce((total,cartItem)=>{
        return total + cartItem.quantity * cartItem.price 
    }, 0)
    return(
        <div>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>View Cart</DialogTitle> 
                    <DialogDescription>Edit your cart, or checkout.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 max-h-[400px] overflow-y-auto">
                    {cartItems === null ?(
                        <div>No services in the cart.</div>
                    ):(
                        <div>
                            {cartItems.map((cartItem,idx)=>
                            <div key={idx} className="flex flex-col m-2">
                            <div className="flex flex-row justify-between">
                                <div className='flex flex-row'>
                                    <Image src={cartItem.imageUrl} width={100} height={100} alt='Image not found'></Image>
                                    <div className='px-4'>
                                        {cartItem.name} 
                                        <div>Price: {cartItem.price}</div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Button variant='ghost' onClick={()=>{removeItem(cartItem.id)}}><Minus></Minus></Button>
                                    <div>{cartItem.quantity}</div>
                                    <Button variant='ghost' onClick={()=>{addItem(cartItem)}}><Plus></Plus></Button> 
                                </div>
                            </div>
                        </div>
                            )}   
                        </div>
                    )}
                </div>
            <div>
                <div className="flex flex-row justify-between">
                    <div>Cart Total : {cartTotal}</div>
                    <Button type="submit" disabled={cartItems===null ? true : false} onClick={()=>{router.push('/checkout')}}>Checkout</Button>
                </div>
            </div>
            </DialogContent>
        </div>
    )
}