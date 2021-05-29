import React, { Component } from "react";
import DataTable from "./component/TataTable/DataTable";
class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Ibos Limited</h1>
        <DataTable />
      </div>
    );
  }
}

export default App;
