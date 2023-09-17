export type CreateUserFormat = {
    name: string;
    email: string;
    password: string;
    emailVerified: boolean;
};

export type UpdateUserFormat = {
    name: string;
    email: string;
    password: string;
};