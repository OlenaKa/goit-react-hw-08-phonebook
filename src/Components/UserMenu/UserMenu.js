import "./UserMenu.css"
import { connect } from "react-redux"
import { selectors } from "../../redux/authentification"
import { authOperations } from "../../redux/authentification"

const UserMenu = ({ user, logout }) => {
  console.log(user)
  return (
    <div className="user-menu-container">
      <p>Wellcome, {user.name}!</p>
      <p> {user.email} </p>
      <button type="button" onClick={logout} className="logout-btn">
        Logout
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: selectors.getUser(state),
})
const mapDispatchToProps = {
  logout: authOperations.logout,
}
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
