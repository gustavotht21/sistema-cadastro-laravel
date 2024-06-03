interface BaseModel {
    id: number;
}

export interface User extends BaseModel {
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export interface ICategory extends BaseModel {
    name: string;
    description?: string;
    status: string;
}
