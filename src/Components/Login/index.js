import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  LoginContainer,
  LoginImage,
  FormContainer,
  InputContainer,
  Label,
  Input,
  Button,
  Errormssg,
} from './styledComponents'

class Login extends Component {
  state = {
    userId: '',
    userPin: '',
    showError: false,
    errorMsg: '',
  }

  onChangeUserID = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({userPin: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showError: true,
      errorMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, userPin} = this.state
    const userDetails = {user_id: userId, pin: userPin}
    const loginUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userId, userPin, showError, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <LoginContainer>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <FormContainer onSubmit={this.onSubmitForm}>
            <h1>Welcome Back!</h1>
            <InputContainer>
              <Label>User ID</Label>
              <Input
                placeholder="Enter User ID"
                type="text"
                value={userId}
                onChange={this.onChangeUserID}
              />
            </InputContainer>
            <InputContainer>
              <Label>PIN</Label>
              <Input
                placeholder="Enter PIN"
                type="password"
                value={userPin}
                onChange={this.onChangePin}
              />
            </InputContainer>
            <Button type="Submit">Login</Button>
            {showError && <Errormssg>{errorMsg}</Errormssg>}
          </FormContainer>
        </LoginContainer>
      </AppContainer>
    )
  }
}

export default Login
