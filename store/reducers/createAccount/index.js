import axios from "axios";
import { ADD_NEW_ACCOUNT } from "../../actions/types";

const initialStateNewAccount = {};


const reducer = (state = initialStateNewAccount, action) => {
    switch (action.type) {
        // case HYDRATE:
        //   return { ...state, ...action.payload.user };

        //-------------
        case ADD_NEW_ACCOUNT:
            // const response = await axios.post('http://localhost:8000/createaccount', action.payload);
            // const newState = {...response.data.user.user};
            console.log(action.payload);//-----
            let newState = { ...action.payload };
            return newState;


        default:
            return state;
    }
};

export default reducer;