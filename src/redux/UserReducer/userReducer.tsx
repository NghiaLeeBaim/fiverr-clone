import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DispatchType } from '../store';
import { TOKEN, USER_LOGIN, httpNonAuth, setStore, setStoreJson } from '../../util/config';
import { UserLoginModel } from '../../Pages/Login/Login';
import { history } from '../../index';


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
            setStoreJson(USER_LOGIN,action.payload);
            setStore(TOKEN,action.payload.accessToken);
            history.push("/profile")
        }
    }
});

export const { loginAction } = userReducer.actions

export default userReducer.reducer

export const loginActionApi = (userLoginForm: UserLoginModel) => {
    return async (dispatch: DispatchType) => {
        let res = await httpNonAuth.post("/api/auth/signin", userLoginForm)

        setStoreJson(USER_LOGIN, res.data.content);
        
        const action: PayloadAction<UserLogin> = loginAction(res.data.content);
        dispatch(action)
    }
}