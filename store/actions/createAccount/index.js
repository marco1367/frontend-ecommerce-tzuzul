import axios from 'axios';
import {ADD_NEW_ACCOUNT}  from '../types';

// export const addNewAccount = (data) => ({
//     type: ADD_NEW_ACCOUNT,
//     payload: data,
// });

export function postNewAccount(obj){
    return async function(dispatch) {
        return await axios.post("http://localhost:8000/createaccount",obj)
          .then(response => {
            dispatch({ type: ADD_NEW_ACCOUNT, payload: response.data.user.user });
          });
    };
  }