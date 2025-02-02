'use client'

import { PaymentMethods, Banks } from '@/lib/payment-methods'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import {useRouter} from 'next/navigation'
import { IPaymentMethod } from '@/interface/interface'
import PaymentMethod from '@/components/PaymentMethod'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Page(){
    const [method,setMethod] = useState<IPaymentMethod | null>(null)
    function selectMethod(type : string){
        setMethod(PaymentMethods.filter((m)=>m.type === type)[0])
    }
    return(
        <div className='max-w-4xl mx-auto flex flex flex-col md:flex-row justify-around md:items-center m-4'>
            <div className='w-fit grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto'>
                {PaymentMethods.map((m,idx)=>
                <div className={`w-full cursor-pointer ${method?.type === m.type ? 'bg-blue-400' : ''} my-4 p-2 border-2 rounded-md`} key={idx} onClick={()=>selectMethod(m.type)}>
                    <PaymentMethod paymentMethod={m}></PaymentMethod>
                </div>
                )}
            </div>
            <div className='mx-auto'>
                {method === null ? (
                    <div>Click on a payment method to continue.</div>
                ) : (
                    <>
                        {method.type === 'UPI' && <PayViaUPI />}
                        {method.type === 'Debit Card' && <PayViaDebitCard />}
                        {method.type === 'Credit Card' && <PayViaCreditCard />}
                        {method.type === 'Net Banking' && <PayViaNetBanking />} 
                    </>
                )}
            </div>
        </div>
    )
}

function PayViaUPI(){
    const router = useRouter()
    return(
        <div className='flex flex-col gap-y-4 justify-around max-w-lg'>
            <div>UPI Id</div>
            <div>Please enter your UPI Details to continue</div>
            <Input type='text' placeholder='UPI Id'></Input>
            <Button onClick={()=>{router.push('verify-payment')}}>Continue</Button>
        </div>
    )
}

function PayViaDebitCard(){
    const router = useRouter()
    return(
        <div className='m-4 flex flex-col gap-y-4 justify-around max-w-lg'>
            <div>Debit Card</div>
            <div>Please enter your Debit Card Details to continue</div>
            <div className='flex flex-col gap-y-2'>
                <Input type='text' placeholder='Debit Card Number'></Input>
                <div className='flex flex-row gap-x-2'>
                    <Input className='w-1/3' type='text' placeholder='CVV'></Input>
                    <Input className='w-1/3' type='text' placeholder='Expiry Month'></Input>
                    <Input className='w-1/3' type='text' placeholder='Expiry Year'></Input>
                </div>
            </div> 
            <Button onClick={()=>{router.push('verify-payment')}}>Continue</Button>
        </div>
    )
}

function PayViaCreditCard(){
    const router = useRouter()
    return(
        <div className='m-4 flex flex-col gap-y-4 justify-around max-w-lg'>
            <div>Credit Card</div>
            <div>Please enter your Credir Card Details to continue</div>
            <div className='flex flex-col gap-y-2'>
                <Input type='text' placeholder='Credit Card Number'></Input>
                <div className='flex flex-row gap-x-2'>
                    <Input className='w-1/3' type='text' placeholder='CVV'></Input>
                    <Input className='w-1/3' type='text' placeholder='Expiry Month'></Input>
                    <Input className='w-1/3' type='text' placeholder='Expiry Year'></Input>
                </div>
            </div> 
            <Button onClick={()=>{router.push('verify-payment')}}>Continue</Button>
        </div>
    )
}

function PayViaNetBanking(){
    const [bank,setBank] = useState('Select Bank')
    const router = useRouter()
    return(
        <div className='m-4 max-w-lg'>
            <div>Net Banking</div>
            <div>Please select your bank, you will be redirected to the bank page</div>
            <div className='flex flex-row justify-between py-4'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">{bank}</Button> 
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Select Bank</DropdownMenuLabel> 
                <DropdownMenuGroup>
                {Banks.map((bank,idx)=><DropdownMenuItem key={idx} onClick={()=>{setBank(bank)}}>{bank}</DropdownMenuItem>)} 
                </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <Button onClick={()=>{router.push('verify-payment')}} disabled={bank === 'Select Bank' ? true : false }>Continue</Button>
            </div>
        </div>
    )
}