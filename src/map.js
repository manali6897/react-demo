import React, { Component } from "react";

class Mysheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h2>Table use with list and map class component</h2>
        <table border="1" width="100%">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>BIRTHYEAR</th>
            <th>BIRTHCITY</th>
          </tr>
          <tbody>
            {this.props?.bdetail?.map((obj, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{obj?.id}</td>
                    <td>{obj?.name}</td>
                    <td>{obj?.surname}</td>
                    <td>{obj?.birthYear}</td>
                    <td>{obj?.birthCity}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
export default Mysheet;
