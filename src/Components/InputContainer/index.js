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
    initialFakeData: [],
    url: '',
    username: '',
    password: '',
    checkbox: false,
    searchInput: '',
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
      initialFakeData: [...prevState.initialFakeData, newPassword],
      url: '',
      username: '',
      password: '',
    }))
    console.log(newPassword)
  }

  onSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  showAllPasswords = () => {
    const {checkbox} = this.state
    this.setState(prevState => ({
      checkbox: !prevState.checkbox,
      initialFakeData: prevState.initialFakeData.map(each => {
        if (checkbox === false) {
          return {...each, showPassword: !prevState.showPassword}
        }
        return {...each, showPassword: prevState.showPassword}
      }),
    }))
  }

  onDeleteItem = id => {
    console.log('working delete', id)
    const {initialFakeData} = this.state
    const filteredData = initialFakeData.filter(each => each.id !== id && each)
    this.setState(prevState => ({
      initialFakeData: filteredData,
    }))
  }

  render() {
    const {initialFakeData, searchInput} = this.state
    const count = initialFakeData.length
    const searchOnRequest = searchInput.length !== 0
    const filteredData =
      searchOnRequest &&
      initialFakeData.filter(
        each =>
          each.username
            .toLocaleLowerCase()
            .includes(searchInput.toLocaleLowerCase()) && each,
      )
    console.log(filteredData)

    return (
      <div className="bg-container">
        <img
          alt="app logo"
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="card-container">
          <div className="inputs-container">
            <form onSubmit={this.onAddElement} className="input-elements">
              <h1 className="main-heading">Add New Password</h1>
              <div className="input-element-1">
                <img
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                />
                <input
                  required
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
                  required
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
                  required
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
            <h1 className="main-heading">
              Your Passwords{' '}
              <span>
                <p>{count}</p>
              </span>
            </h1>
            <div className="input-element-2">
              <img
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                type="search"
                onChange={this.onSearchInput}
                placeholder="search"
              />
            </div>
            <hr />
            <input
              id="check-box"
              type="checkbox"
              onClick={this.showAllPasswords}
            />
            <label htmlFor="check-box">Show passwords</label>
          </div>
          <ul className="passwords-container">
            {count === 0 && (
              <li>
                <img
                  className="no-passwords-img"
                  alt="no passwords"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                />
                <p>No Passwords</p>
              </li>
            )}
            {searchOnRequest
              ? filteredData.map(each => (
                  <Passwords
                    key={each.id}
                    eachItem={each}
                    onDeleteItem={this.onDeleteItem}
                  />
                ))
              : initialFakeData.map(each => (
                  <Passwords
                    key={each.id}
                    eachItem={each}
                    onDeleteItem={this.onDeleteItem}
                  />
                ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default InputContainer
