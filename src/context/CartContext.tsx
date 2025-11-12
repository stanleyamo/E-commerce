import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/types";

export interface CartItem extends Product {
    size: string;
    quantity: number;
    price: number; // price including size adjustment
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number | string, size: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        // Check if same product and size already exists
        const existingIndex = cart.findIndex(
            (i) => i.id === item.id && i.size === item.size
        );

        if (existingIndex >= 0) {
            const updatedCart = [...cart];
            updatedCart[existingIndex].quantity += item.quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (id: number | string, size: string) => {
        setCart(cart.filter((item) => !(item.id === id && item.size === size)));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
