import { Fragment, useEffect, useState } from "react";
import AbsenceTable from "./components/table";
import FilterBar from "./components/filters/filter.bar";
import { useDispatch, useSelector } from 'react-redux';
import { getAllAbsences } from './redux/absences';
import Pagination from "./components/pagination";
import { MESSAGES } from "./common/constants";

export default function AbsenceMgr() {

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const { absences } = useSelector((state) => state);
  const [absencesData, setAbsencesData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const lastIndex = currentPage * recordsPerPage;
  const startIndex = lastIndex - recordsPerPage;
  const currentAbsencesData = [...absencesData].splice(startIndex, recordsPerPage);

  const paginate = (num) => {
    setCurrentPage(num)
  };

  const setFilteredData = (res) => {
    if (res && res.isFiltered) {
      const { data } = res;
      data && data.length == 0 ? setMsg(MESSAGES.EMPTY) : setMsg("");
      setAbsencesData(data);
    } else {
      absences && absences.length == 0 ? setMsg(MESSAGES.EMPTY) : setMsg("");
      setAbsencesData(absences);
    }
  }

  const loader = (msg) => {
    if (msg) {
      setMsg(MESSAGES.ERROR);
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    dispatch(getAllAbsences(loader));
  }, [dispatch]);

  useEffect(() => {
    absences && absences.length == 0 ? setMsg(MESSAGES.EMPTY) : setMsg("");
    setAbsencesData(absences);
  }, [absences]);
    
  return (
    <Fragment>
      <FilterBar absenceData={absences} setFilteredData={setFilteredData} />
      <AbsenceTable absenceData={currentAbsencesData} loading={loading} msg={msg}/>
      <Pagination count={absencesData.length} perPage={recordsPerPage} paginate={paginate} />
    </Fragment>
  )
}