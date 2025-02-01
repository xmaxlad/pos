'use client'

import { Button } from "@/components/ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import CartItem from '@/components/CartItem'
import {useStore} from '@/store/useStore'
import {useRouter} from 'next/navigation' 

export default function Cart() { 
    const {cartItems,removeItem} = useStore()
    const router = useRouter()
    const cartTotal = cartItems === null ? 0 : cartItems.reduce((total,cartItem)=>{
        return total + cartItem.price 
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
                            {cartItems.map((cartItem,idx)=><CartItem key={idx} cartItem={cartItem} handleRemoveItem={removeItem}/>)}   
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