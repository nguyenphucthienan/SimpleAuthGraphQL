import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser';
import Logout from '../mutations/Logout';

class Header extends Component {
  constructor() {
    super();
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query: CurrentUser }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (user) {
      return (
        <li><a onClick={this.onLogoutClick}>Logout</a></li>
      );
    }

    return (
      <div>
        <li><Link to="/login">Login</Link></li>        
        <li><Link to="/register">Register</Link></li>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-1">
          <Link to="/" className="brand-logo left">
            <i className="material-icons">home</i>Auth
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(Logout)(graphql(CurrentUser)(Header));
