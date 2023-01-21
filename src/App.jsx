import React from "react";

function App() {
  return (
    <table
      cellSpacing="0"
      cellPadding="0"
      style={{ borderCollapse: "collapse", borderSpacing: "none" }}
    >
      <tbody>
        <tr style={{ border: "none" }}>
          <td width="400px" style={{ border: "noe", verticalAlign: "top" }}>
            <img src="https://github.com/m-avagyan/m-avagyan/blob/master/src/public/images/header.svg" />
            <img src="https://github.com/m-avagyan/m-avagyan/blob/master/src/public/images/repositories.svg" />
            <img src="https://github.com/m-avagyan/m-avagyan/blob/master/src/public/images/activity-community.svg" />
            <img src="https://github.com/m-avagyan/m-avagyan/blob/master/src/public/images/recent-activity.svg" />
          </td>
          <td width="400px" style={{ border: "noe", verticalAlign: "top" }}>
            <img src="https://github.com/m-avagyan/m-avagyan/blob/master/src/public/images/languages.svg" />
            <img src="https://github.com/m-avagyan/m-avagyan/blob/master/src/public/images/achievements.svg" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
