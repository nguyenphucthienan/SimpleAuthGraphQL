import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import Login from '../mutations/Login';
import CurrentUser from '../queries/CurrentUser';
import AuthForm from './AuthForm';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { errors: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: CurrentUser }]
    }).catch((res) => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <div className="center-align">
        <h5>Login</h5>
        <AuthForm
          onSubmit={this.onSubmit}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(CurrentUser)(graphql(Login)(LoginForm));
