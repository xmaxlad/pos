import { Service,User } from '@/interface/interface';
import { create } from 'zustand';

interface ServiceWithQuantity extends Service {
    quantity : number
}

interface State {
    cartItems: ServiceWithQuantity[];
    user : User | null;
    addItem: (item: Service) => void;
    removeItem: (id: number) => void;
    setUser : (user : User) => void;
}

export const useStore = create<State>((set) => ({
    cartItems: [],
    user : null,
    quantity : [],
    addItem: (item: Service) => set((state) => {
        const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            return {
                cartItems: state.cartItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            };
        } else {
            return {
                cartItems: [...state.cartItems, { ...item, quantity: 1 }]
            };
        }
    }),
    removeItem: (id: number) => set((state) => {
        const existingItem = state.cartItems.find(cartItem => cartItem.id === id);
        if (existingItem) {
            if (existingItem.quantity > 1) {
                return {
                    cartItems: state.cartItems.map(cartItem =>
                        cartItem.id === id
                            ? { ...cartItem, quantity: cartItem.quantity - 1 }
                            : cartItem
                    )
                };
            } else {
                // If the quantity is 1, remove the item from the cart
                return {
                    cartItems: state.cartItems.filter(cartItem => cartItem.id !== id)
                };
            }
        }
        return state; // No changes if the item is not found
    }),
    setUser: (user : User) => set(()=>({
        user : user 
    })),
}));