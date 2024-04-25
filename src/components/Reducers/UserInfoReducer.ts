import { USER_INFO } from "../utils/Constants.ts"



export const UserInfoInitialState = {
    UserInfo: {},
};



export const UserInfoReducer = (state, actions) => {
    switch (actions.type) {
        case USER_INFO.ADD_USER:
            return {
                UserInfo: actions.payload

            }
        case USER_INFO.REMOVE_USER:
            return {
                UserInfo: {}

            }
        default: return state
    }
}