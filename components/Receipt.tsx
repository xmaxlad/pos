import {Service, User} from '@/interface/interface'

export default function Receipt({services,user}:{services:Service[],user:User}){
    const totalBillAmount = services.reduce((total, service)=>{return total + service.price},0) 
    return(
        <div className='flex flex-col border-2 rounded-md p-2 gap-y-4'>
            Receipt
           <div className='flex flex-row justify-between'>
            <div>
                <h3>Biller Company Name</h3>
                <p>HSR Banglore India</p>
            </div>
            <div>
                <h3>Billed to {user.name}</h3>
                <p>{user.email}</p> 
                <p>{user.phoneNumber}</p>
            </div>
            </div>

            <div>
                <div className='flex flex-row justify-between'>
                     <div>Service Name</div>
                     <div>
                    Service Price
                </div>
                </div> 
                {services.map((service,idx)=><div className='flex flex-row justify-between my-2' key={idx}>
                    <div className='flex flex-col my-1'>
                        <div>{service.name}</div>
                        <div>{service.description}</div>
                    </div>
                    <div>
                        {service.price}
                    </div>
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