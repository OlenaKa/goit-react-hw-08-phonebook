import { Component } from "react"
import { authOperations } from "../redux/authentification"
import { connect } from "react-redux"
class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onRegister(this.state)

    this.setState({ name: "", email: "", password: "" })
  }

  render() {
    const { name, email, password } = this.state

    return (
      <div>
        <h1>Registration page</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
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
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.addUser,
}

// export default connect(null, mapDispatchToProps)(RegisterView);

// const RegisterView = () => (
//   <form>
//     <label for="name">
//       <input type="text" id="name" name="name" />
//       name
//     </label>
//     <label for="e-mail">
//       <input type="email" id="e-mail" name="e-mail" />
//       e-mail
//     </label>
//     <label for="pass">
//       <input type="password" id="pass" name="password" />
//       password
//     </label>
//     <button type="submit">Submit</button>
//   </form>
// )

export default connect(null, mapDispatchToProps)(RegisterView)
