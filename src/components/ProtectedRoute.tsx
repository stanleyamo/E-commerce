import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode;
    adminOnly?: boolean;
}

export default function ProtectedRoute({
                                           children,
                                           adminOnly = false,
                                       }: ProtectedRouteProps) {
    const currentUser: { email: string; isAdmin: boolean } | null =
        JSON.parse(localStorage.getItem("user") || "null");

    if (!currentUser) return <Navigate to="/login" replace />;
    if (adminOnly && !currentUser.isAdmin) return <Navigate to="/" replace />;

    return <>{children}</>;
}
