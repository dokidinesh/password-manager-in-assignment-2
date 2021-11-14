import './App.css'

const App = () => (
  <div className="app-container">
    <div>
      <div>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="inputs-container">
          <img
            className="password-manager-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
          <form className="form">
            <h1 className="add-password-heading">Add New Password</h1>
            <div className="input">
              <img
                className="input-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input className="input-element" placeholder="Enter Website" />
            </div>
            <div className="input">
              <img
                className="input-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                className="input-element"
                placeholder="Enter Username"
                type="text"
              />
            </div>
            <div className="input">
              <img
                className="input-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                className="input-element"
                placeholder="Enter Password"
                type="password"
              />
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="passwords-container">
          <div className="your-passwords-container">
            <p className="your-passwords">Your Passwords</p>

            <div className="input">
              <img
                className="input-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                className="input-element"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="filter-container">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="your-passwords">
              Show Passwords
            </label>
          </div>
          <img
            className="no-passwords-image"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="delete"
          />
          <h1 className="no-passwords-heading">No Passwords</h1>
        </div>
      </div>
    </div>
  </div>
)

export default App
