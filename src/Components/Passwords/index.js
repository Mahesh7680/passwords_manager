import './index.css'

const Passwords = props => {
  const {eachItem} = props
  const {username, password, url, showPassword} = eachItem

  const passwordToDisplay = showPassword ? (
    password
  ) : (
    <img
      className="stars-password"
      alt="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
    />
  )

  return (
    <div className="each-password-container">
      <h1>{username.toUpperCase()[0].split()}</h1>
      <div>
        <p>{url}</p>
        <p>{username}</p>
        <p>{passwordToDisplay}</p>
      </div>
      <img
        className="delete-image"
        alt="delete"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
      />
    </div>
  )
}

export default Passwords
