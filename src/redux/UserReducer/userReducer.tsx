import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DispatchType } from '../store';
import { TOKEN, USER_LOGIN, clearStore, getStoreJson, httpNonAuth, setStore, setStoreJson, } from '../../util/config';
import { UserLoginModel } from '../../Pages/Login/Login';
import { history } from '../../index';
import { UserRegisterModel } from '../../Pages/Register/Register';


export interface UserLogin {
    user: {
        id: string;
        name: string;
        email: string;
        password: string;
        phone: string;
        birthday: string;
        gender: boolean;
        role: string;
        skill: string[];
        certification: string[];
    }
    accessToken: string
}

export interface UserRegister {

}

export interface UserState {
    userLogin: UserLogin | null | undefined
}

const initialState: UserState = {
    userLogin: getStoreJson(USER_LOGIN)
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginAction: (state: UserState, action: PayloadAction<UserLogin>) => {
            history.push("/profile")
        },
        registerAction: (state: UserState, action: PayloadAction<UserRegister>) => {
            history.push("/login")
        }
    }
});

export const { loginAction, registerAction } = userReducer.actions

export default userReducer.reducer

export const loginActionApi = (userLoginForm: UserLoginModel) => {
    return async (dispatch: DispatchType) => {
        let res = await httpNonAuth.post("/api/auth/signin", userLoginForm)

        setStoreJson(USER_LOGIN, res.data.content);
        setStoreJson(TOKEN, res.data.content.token);



        const action: PayloadAction<UserLogin> = loginAction(res.data.content);
        dispatch(action)
    }
}

export const RegisterActionApi = (userRegisterForm: UserRegisterModel) => {
    return async (dispatch: DispatchType) => {
        let res = await httpNonAuth.post("/api/auth/signup", userRegisterForm)


        const action: PayloadAction<UserRegister> = registerAction(res.data.content);
        dispatch(action)
    }
}