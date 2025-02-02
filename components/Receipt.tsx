'use client'
import { useStore } from '@/store/useStore'

export default function Receipt(){
    const {cartItems,user} = useStore()
    const totalBillAmount = cartItems.reduce((total, service)=>{return total + service.quantity * service.price},0) 
    return(
        <div className='flex flex-col border-2 rounded-md p-2 gap-y-4'>
            Receipt
           <div className='flex flex-row justify-between'>
            <div>
                <h3>Biller Company Name</h3>
                <p>HSR Banglore India</p>
            </div>
            <div>
                <h3>Billed to {user?.name}</h3>
                <p>{user?.email}</p> 
                <p>{user?.phoneNumber}</p>
            </div>
            </div>

            <div>
                <div className='flex flex-row justify-between'>
                     <div className='flex-1'>Service</div>
                     <div className='w-16 flex-initial'>Quantity</div>
                     <div className='w-10 flex-initial'>Price</div>
                </div> 
                {cartItems.map((service,idx)=><div className='flex flex-row justify-between my-2' key={idx}>
                    <div className='flex-1 my-1'>
                        <div>{service.name}</div>
                        <div>{service.description}</div>
                    </div>
                    <div className='w-16 flex-initial space-between'>{service.quantity}</div>
                    <div className='w-10 flex-initial'>{service.price}</div> 
                </div>)}
            </div>

            <div className='flex flex-row justify-between my-2'>
                <div>
                    Total Bill Amount : 
                </div>
                <div>
                    {totalBillAmount} 
                </div>
            </div>
        </div>
    )
}