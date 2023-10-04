import './index.css'

const Passwords = props => {
  const {eachItem, onDeleteItem} = props
  const {id, username, password, url, showPassword} = eachItem

  const passwordToDisplay = showPassword ? (
    password
  ) : (
    <img
      className="stars-password"
      alt="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
    />
  )
  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <div className="each-password-container">
      <h1>{username.toUpperCase()[0].split()}</h1>
      <div className="data-display-container">
        <p>{url}</p>
        <p>{username}</p>
        <li>
          <p>{passwordToDisplay}</p>
        </li>
      </div>
      <button
        type="button"
        className="delete-container"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          className="delete-image"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </div>
  )
}

export default Passwords
