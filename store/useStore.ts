import { Service,User } from '@/interface/interface';
import { create } from 'zustand';

interface State {
    cartItems: Service[];
    user : User | null;
    addItem: (item: Service) => void;
    removeItem: (id: number) => void;
    setUser : (user : User) => void;
}

export const useStore = create<State>((set) => ({
    cartItems: [],
    user : null,
    addItem: (item: Service) => set((state) => ({
        cartItems: [...state.cartItems, item],
    })),
    removeItem: (id: number) => set((state) => ({
        cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
    setUser: (user : User) => set(()=>({
        user : user 
    })),
}));