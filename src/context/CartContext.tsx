import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/types";

// Cart item includes Product + size + quantity + price
export interface CartItem extends Product {
    size: string;
    quantity: number;
    price: number; // price for this quantity & size
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number | string, size?: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            // Check if same product & size already exists
            const existingIndex = prev.findIndex(
                (i) => i.id === item.id && i.size === item.size
            );
            if (existingIndex !== -1) {
                const updated = [...prev];
                updated[existingIndex].quantity += item.quantity;
                updated[existingIndex].price += item.price;
                return updated;
            }
            return [...prev, item];
        });
    };

    const removeFromCart = (id: number | string, size?: string) => {
        setCart((prev) =>
            prev.filter((item) => !(item.id === id && (!size || item.size === size)))
        );
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
