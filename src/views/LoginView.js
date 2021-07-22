import { Component } from "react"
import { connect } from "react-redux"
import { authOperations, selectors } from "../redux/authentification"

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onLogin(this.state)

    this.setState({ name: "", email: "", password: "" })
  }

  render() {
    const { email, password } = this.state
    console.log(this.props.isAuthenticated)
    return (
      <div>
        <h1>Login page</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
}

const mapStateToProps = (state) => ({
  isAuthenticated: selectors.getIsLoggedIn(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
