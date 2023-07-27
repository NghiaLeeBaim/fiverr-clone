import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DispatchType } from '../store';
import { USER_LOGIN, httpNonAuth, setStoreJson } from '../../util/config';
import { UserLoginModel } from '../../Pages/Login/Login';


export interface UserLogin {
    email: string,
    accessToken: string
}

export interface UserState {
    userLogin: UserLogin | null
}

const initialState: UserState = {
    userLogin: null
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginAction: (state: UserState, action: PayloadAction<UserLogin>) => {
            state.userLogin = action.payload;
        }
    }
});

export const { loginAction } = userReducer.actions

export default userReducer.reducer

export const loginActionApi = (userLoginForm: UserLoginModel) => {
    return async (dispatch: DispatchType) => {
        let res = await httpNonAuth.post("/api/auth/signin",userLoginForm)

        setStoreJson(USER_LOGIN,res.data.content);

        const action:PayloadAction<UserLogin>= loginAction(res.data.content);
        dispatch(action)
    }
}