import axios from "axios";
import { ADD_NEW_ACCOUNT } from "../../actions/types";

const initialStateNewAccount = {};


const reducer = (state = initialStateNewAccount, action) => {
    switch (action.type) {
        // case HYDRATE:
        //   return { ...state, ...action.payload.user };

        //-------------
        case ADD_NEW_ACCOUNT:
            let newState = { ...action.payload };
            return newState;


        default:
            return state;
    }
};

export default reducer;