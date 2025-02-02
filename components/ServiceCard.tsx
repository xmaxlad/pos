import {Service} from '@/interface/interface'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import { useState } from 'react'

export default function ServiceCard({service,handleAddItem} : { service:Service, handleAddItem : (item:Service)=>void }){
    const {name,description,imageUrl,frequency,duration,price} = service 
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = () => {
        handleAddItem(service);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 400);
    };

    return(
        <div>
            <Image src={imageUrl} width={500} height={500} alt='Image Not Found'></Image>
            <div>{name}</div>
            <div>{description}</div>
            <div className="flex flex-row justify-between">
                <div>{frequency}</div>
                <div>{duration}</div>
            </div>
            <div>{price}</div>  
            <Button onClick={handleAddToCart}>{addedToCart ?<div className="animate-fadeIn">Service added to cart!</div> : 'Add to cart'}</Button>
        </div>
    )
}