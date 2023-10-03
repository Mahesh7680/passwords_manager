import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Passwords from '../Passwords/index'
import './index.css'

const fakeData = [
  {
    id: uuidv4(),
    url: 'www.google.com',
    username: 'mahesh',
    password: '123456',
    showPassword: false,
  },
  {
    id: uuidv4(),
    url: 'www.google.com',
    username: 'ramesh',
    password: '123456',
    showPassword: false,
  },
]

class InputContainer extends Component {
  state = {
    initialFakeData: fakeData,
    url: '',
    username: '',
    password: '',
  }

  onAddUrl = e => {
    this.setState({url: e.target.value})
  }

  onAddUsername = e => {
    this.setState({username: e.target.value})
  }

  onAddPassword = e => {
    this.setState({password: e.target.value})
  }

  onAddElement = e => {
    e.preventDefault()
    const {url, username, password} = this.state
    console.log(url, username, password)
    const newPassword = {
      id: uuidv4(),
      url,
      username,
      password,
      showPassword: false,
    }

    this.setState(prevState => ({
      initialFakeData: {...prevState.initialFakeData, newPassword},
      url: '',
      username: '',
      password: '',
    }))
    console.log(newPassword)
  }

  render() {
    const {initialFakeData} = this.state
    const count = initialFakeData.length
    console.log(initialFakeData)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="inputs-container">
            <form onSubmit={this.onAddElement} className="input-elements">
              <p>Add New Password</p>
              <div className="input-element-1">
                <img
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                />
                <input
                  type="text"
                  onChange={this.onAddUrl}
                  placeholder="Enter Website"
                />
              </div>
              <div className="input-element-1">
                <img
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  type="text"
                  onChange={this.onAddUsername}
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-element-1">
                <img
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                />
                <input
                  type="password"
                  onChange={this.onAddPassword}
                  placeholder="Enter Password"
                />
              </div>

              <button type="submit">Add</button>
            </form>
            <img
              alt="password manager"
              className="password-manager-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
          </div>
        </div>
        <div className="card-container">
          <div>
            <p>Your Passwords {count}</p>
            <div className="input-element-2">
              <img
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input type="text" placeholder="search" />
            </div>
            <hr />
            <input type="checkbox" />
            <span>show passwords</span>
          </div>
          <ul className="passwords-container">
            {initialFakeData.map(each => (
              <Passwords key={each.id} eachItem={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default InputContainer
