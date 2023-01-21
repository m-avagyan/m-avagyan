import React from "react";

import HeaderImage from "images/header.svg";
import RepositoriesImage from "images/repositories.svg";
import ActivityCommunityImage from "images/activity-community.svg";
import RecentActivityImage from "images/recent-activity.svg";
import LanguagesImage from "images/languages.svg";
import AchievementsImage from "images/achievements.svg";

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
            <HeaderImage />
            <RepositoriesImage />
            <ActivityCommunityImage />
            <RecentActivityImage />
          </td>
          <td width="400px" style={{ border: "noe", verticalAlign: "top" }}>
            <LanguagesImage />
            <AchievementsImage />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
