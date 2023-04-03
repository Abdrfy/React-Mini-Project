export class User {
    id: number | undefined;
    firstname: string | undefined;
    lastname: string | undefined;
}

export interface RootState {
    user: User | undefined;
    counter: number;
    isLogged: boolean;
}

export const initialState: RootState = {
    user: undefined,
    counter: 0,
    isLogged: false
};
