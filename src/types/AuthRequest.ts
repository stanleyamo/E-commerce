import type { Request } from "express";

export interface AuthRequest extends Request {
    headers: {
        authorization?: string;
    };
    user?: {
        id: string;
        isAdmin: boolean;
    };
}
