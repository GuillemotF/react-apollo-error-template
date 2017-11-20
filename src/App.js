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
          <p>This template demonstrate multiple issues :</p>
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
          <p>
            I'm using a Fake graphql server to demonstrate this network error
          </p>
          <p>
            The "New component with apollo" button calls a component with
            apolloClient HOC
          </p>
          <p>
            Go offline, fetch or refetch then unmount the component to throw the
            error in console
          </p>
          <p>
            Go offline, fetch or refetch then go online & try to refetch,
            queries are sent but the component is still on error
          </p>
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
