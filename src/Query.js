import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: false
    };
  }
  componentWillUnmount() {
    console.log("Unmounting component");
  }
  renderQuery() {
    this.setState({
      query: true
    });
  }

  render() {
    const { data: { loading, Fake, error } } = this.props;
    return (
      <div>
        {loading ? (
          <p>Loading…</p>
        ) : error ? (
          <p> Error </p>
        ) : (
          <p>{Fake.firstName}</p>
        )}

        <button onClick={() => this.props.data.refetch().catch(e => null)}>
          Refetch
        </button>
      </div>
    );
  }
}

export default graphql(
  gql`
    query test {
      Fake {
        _id
        firstName
      }
    }
  `
)(Query);
