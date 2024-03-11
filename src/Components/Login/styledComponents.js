import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #152850;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const LoginContainer = styled.div`
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  min-width: 60%;
  min-height: 80%;
  padding: 0px;
`

export const LoginImage = styled.img`
  width: 50%;
  height: 100%;
  background-color: #e0eefe;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`

export const Label = styled.label`
  color: #5a7184;
`

export const Input = styled.input`
  width: 400px;
  height: 40px;
  border-color: #c3cad9;
  border-radius: 8px;
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #1565d8;
  width: 200px;
  height: 50px;
  margin-top: 10px;
  outline: none;
  border: none;
  border-radius: 8px;
`
export const Errormssg = styled.p`
  color: #ff0b37;
`
