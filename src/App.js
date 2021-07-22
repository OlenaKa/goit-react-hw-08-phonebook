import "./App.css"

import { Route, Switch } from "react-router-dom"
import { Suspense, lazy } from "react"
import routes from "./routes"
// import HomeView from "./views/HomeView"
// import RegisterView from "./views/RegisterView"
// import ContactsView from "./views/ContactsView"
// import LoginView from "./views/LoginView"
import Navigation from "./Components/Navigation/Navigation"
import UserMenu from "./Components/UserMenu/UserMenu"
import Spinner from "./Components/Spinner"

import PrivateRoute from "./Components/PrivateRoute"
import PublicRoute from "./Components/PublicRoute"
import { Component } from "react"
import { connect } from "react-redux"
import { authOperations, selectors } from "./redux/authentification"

const HomeView = lazy(
  () => import("./views/HomeView.js") /* webpackChunkName: "home-view"*/
)
const ContactsView = lazy(
  () => import("./views/ContactsView.js") /* webpackChunkName: "contacts-page"*/
)
const LoginView = lazy(
  () => import("./views/LoginView.js") /* webpackChunkName: "login-page"*/
)
const RegisterView = lazy(
  () => import("./views/RegisterView.js") /* webpackChunkName: "register-page"*/
)
class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser()
  }
  render() {
    return (
      <>
        <div className="navbar">
          <Navigation />
          {this.props.isAuthenticated && <UserMenu />}
        </div>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />

            <PrivateRoute
              exact
              path={routes.contacts}
              redirectTo={routes.login}
              component={ContactsView}
            />
            <PrivateRoute
              path={routes.user}
              redirectTo={routes.login}
              component={ContactsView}
            />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.user}
              component={RegisterView}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.user}
              component={LoginView}
            />
          </Switch>
        </Suspense>
      </>
    )
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}
const mapStateToProps = (state) => ({
  isAuthenticated: selectors.getIsLoggedIn(state),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
