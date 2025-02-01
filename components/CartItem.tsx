import { Button } from "@/components/ui/button";
import { Service } from "@/interface/interface";
import Image from 'next/image'

export default function CartItem({cartItem,handleRemoveItem}:{cartItem:Service, handleRemoveItem:(id:number)=>void}){  
    const {id,name,imageUrl,price} = cartItem  
    return(
        <div className="flex flex-col m-2">
            <div className="flex flex-row justify-between">
                <div className='flex flex-row'>
                    <Image src={imageUrl} width={100} height={100} alt='Image not found'></Image>
                    <div className='px-4'>
                        {name} 
                        <div>Price: {price}</div>
                    </div>
                </div>
                <div>
                    <Button variant='ghost' onClick={()=>{handleRemoveItem(id)}}> 
                        <Image src="/trash-2.png" width={24} height={24} alt='Image not found'></Image>
                    </Button>
                </div>
            </div>
        </div>
    )
}