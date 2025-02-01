import { IPaymentMethod } from "@/interface/interface"
import Image from 'next/image'

export default function PaymentMethod({paymentMethod}:{paymentMethod:IPaymentMethod}){ 
    const {type,providers,imageUrl} = paymentMethod 
    return(
        <div className='flex flex-row'>
            <Image src={imageUrl} width={200} height={80} alt='Image not found'></Image>
            <div>
                <div>{type}</div>
                <div>{providers.map((provider,idx)=><div key={idx}>{provider}</div>)}</div>
            </div>
        </div>
    )
}