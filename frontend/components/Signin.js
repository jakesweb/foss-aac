import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
    }
  }
`;

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={SIGNIN_MUTATION} variables={this.state}>
        {(signin, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signin();
              this.setState({ email: "", password: "" });
            }}
          >
            <fieldset disabled={loading}>
              <Error error={error} />
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Sign In</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signin;
export { SIGNIN_MUTATION };
