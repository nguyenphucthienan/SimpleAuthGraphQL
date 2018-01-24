import React, { Component } from 'react';

class AuthForm extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <form className="col m6 offset-m3 s8 offset-s2" onSubmit={this.onSubmit}>
          <div className="input-field">
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={event => this.setState({ password: event.target.value })}
            />
          </div>
          <div className="errors">
            {
              this.props.errors.map(error => (
                <div key={error}>{error}</div>
              ))
            }
          </div>
          <button className="btn red darken-2">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
