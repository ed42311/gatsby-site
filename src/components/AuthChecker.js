import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { 
  login,
  logout
}  from '../store/actions'

const AuthChecker = ({ authorized, login, logout }) => {
  return (
    <div>
      <p>{authorized ? `Login` : `Logout`}</p>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
  
AuthChecker.propTypes = {
  authorized: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

const mapStateToProps = ({ authorized }) => {
  return { authorized }
}

const mapDispatchToProps = dispatch => {
  return { 
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthChecker);