import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { selectors } from "../redux/authentification"

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
)

const mapStateToProps = (state) => ({
  isAuthenticated: selectors.getIsLoggedIn(state),
})

export default connect(mapStateToProps)(PublicRoute)
