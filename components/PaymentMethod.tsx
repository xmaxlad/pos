import { IPaymentMethod } from "@/interface/interface"
import Image from 'next/image'

export default function PaymentMethod({paymentMethod}:{paymentMethod:IPaymentMethod}){ 
    const {type,providers,imageUrl} = paymentMethod 
    return(
        <div className='flex flex-col'>
            <div className=''>Pay using {type}</div>
            <Image src={imageUrl} width={200} height={80} alt='Image not found'></Image>
            <div className='my-2'>{providers.map((provider,idx)=><div className='' key={idx}>{provider}</div>)}</div>
        </div>
    )
}