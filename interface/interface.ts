export interface Service{
    id : number,
    name : string,
    description : string,
    imageUrl : string,
    frequency : string,
    duration : string,
    price : number
}

export interface IPaymentMethod {
    type : string,
    providers : string[],
    imageUrl : string
}

export interface User{
    name? : string | undefined,
    email? : string | undefined,
    phoneNumber? : number | undefined,
}