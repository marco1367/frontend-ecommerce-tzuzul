import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import { postNewAccount } from '../../store/actions/createAccount';
//components:
import GeneralPage from '../../components/pages_estructure/GeneralPage'




export default function CreateAccount() {
  const [stateData, setStateData] = useState({
    username: '',
    email: '',
    hashedPassword: '',
  }); 

  const dispatch = useDispatch();
  const stateCreateAccount = useSelector((state)=>{state.newAccount});

  const onInputChange = (e)=> {
    setStateData({
      ...stateData,
      [e.target.name] : e.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(addNewAccount(stateData))
    dispatch(postNewAccount(stateData));
    setStateData({
      username: '',
      email: '',
      hashedPassword: '',
    })
  };


  return (
    <GeneralPage heightNavBar={'80px'} heightFooter={'50px'} justifyContent={'center'} >
        <FormContainer onSubmit={(event)=>{handleSubmit(event)}} >
          <div className='title' >
            Create una cuenta
          </div>
          <div className='form_container' >
            <form action="">
              <input 
                type="text" 
                name='username' 
                placeholder='nombre de usuario' 
                required={true} 
                onChange={(e)=>{onInputChange(e)}} 
                value={stateData.username}
              />
              <input 
                type="email" 
                name='email' 
                placeholder='correo electrónico' 
                required={true}
                // pattern='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i'
                onChange={(e)=>{onInputChange(e)}} 
                value={stateData.email}
              />
              <input 
                type="password" 
                name='hashedPassword' 
                placeholder='contraseña'
                minLength={8} 
                required={true}
                onChange={(e)=>{onInputChange(e)}} 
                value={stateData.hashedPassword}
              />

              <button type='submit' disabled={false} >Crear cuenta nueva</button>
            </form>
          </div>
        </FormContainer>
    </GeneralPage>
  )
};


const FormContainer = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 6px;
  // box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title{
    width: 100%;
    height: 20%;
    padding:20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .form_container{
    width: 100%;
    height: 80%;
    padding:20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      
      input{
        margin: 10px;
        font-size: 17px;
        padding: 14px 16px;
        width: 330px;
        border-radius: 6px;
        border: 1px solid ;
      }

      button{
        border: none;
        border-radius: 6px;
        font-size: 17px;
        line-height: 48px;
        padding: 0 16px;
        margin-top: 20px;
        // box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%);
        box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
        box-sizing: border-box;
        background-color: #119360;
        color: white;
        cursor: pointer;
      }
    }

  }
`
