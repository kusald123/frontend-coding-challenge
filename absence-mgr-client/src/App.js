import { Component, Fragment} from "react";
import AbsenceTable from "./components/table";
import FilterBar from "./components/filter.bar";
import { URL } from "./configs/constants";
import axios from 'axios';


export default class AbsenceMgr extends Component {

  state = {
    absenceData: []
  };

  componentDidMount() {
    // Note:: can use a separate component but this is used this way in order to reduce the number of API calls to get the memberName
    const membersMap = {};
    axios.get(URL.MEMBERS).then((results) => {
      const members = results.data;
      members.forEach((member) => membersMap[member.userId] = member.name);
      return axios.get(URL.ABSENCES);
    }).then((results) => {
      const absences = results.data;
      absences.forEach((absence) => absence['userName'] = membersMap[absence.userId]);
      this.setState({ absenceData: absences });
    }).catch((err) => console.error(err));
  }

  render() {
    const { absenceData } = this.state;
    return (
      <Fragment>
        <FilterBar />
        <AbsenceTable absenceData={absenceData} />
      </Fragment>
    )
  }

}