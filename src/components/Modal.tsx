// src/components/Modal.tsx
import type { ReactNode } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg p-6 max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}
