export interface UserRegister {
    name: string;
    lName?: string;
    nif: string;
    nTlf?:number;
    email: string;
    password: string;
    hasAcceptedConditions?: boolean;
    countries?: Countries;
    description?: string;
}

export type Countries = 'United States' | 'Germany' | 'United Kingdom' | 'Italy' | 'France' | 'Portugal' | 'Spain';