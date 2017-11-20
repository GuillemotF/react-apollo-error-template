import React, { Component } from "react";
import Query from "./Query";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderQuery: false
    };
  }
  mountQuery() {
    this.setState({
      renderQuery: true
    });
  }
  unmountQuery() {
    this.setState({
      renderQuery: false
    });
  }
  render() {
    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
          <h2>This template demonstrate multiple issues :</h2>
          <ol>
            <li>
              An unhandled network error when unmounting a component that failed
              to fetch
            </li>
            <li>
              Undefined response in afterware for a network error (e.g. client
              offline or server crashed)
            </li>
            <li>Component can't render data after an error (stuck on error)</li>
          </ol>
          <h2>How it works :</h2>
          <p>
            This template is using the Fake graphql server from :
            http://fake.graphql.guru/
          </p>
          <p>
            You'll have to simulate an offline state (e.g. with chrome developer
            tools -> Network), this is the same behavior as server offline or
            crashed.
          </p>
          <p>
            The "New component with apollo" button calls a component with
            apolloClient HOC querying a random firstname
          </p>
          <h2>Steps to reproduce issues :</h2>
          <ol>
            <li>
              Go offline, click button to fetch then unmount the component to
              throw the error in console
            </li>
            <li>
              Go online then try to fetch/refetch, the component still displays
              error (but queries are sent and return data)
            </li>
          </ol>
        </header>
        {this.state.renderQuery ? (
          <div>
            <button onClick={() => this.unmountQuery()}> Unmount </button>
            <Query />
          </div>
        ) : (
          <button onClick={() => this.mountQuery()}>
            {" "}
            New component with apollo{" "}
          </button>
        )}
      </main>
    );
  }
}

export default App;
