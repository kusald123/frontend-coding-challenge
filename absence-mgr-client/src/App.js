import { Fragment, useEffect, useState } from "react";
import AbsenceTable from "./components/table";
import FilterBar from "./components/filters/filter.bar";
import { useDispatch, useSelector } from 'react-redux';
import { getAllAbsences } from './redux/absences';
import Pagination from "./components/pagination";

export default function AbsenceMgr() {

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const { absences } = useSelector((state) => state);
  const [absencesData, setAbsencesData] = useState([]);

  const lastIndex = currentPage * recordsPerPage;
  const startIndex = lastIndex - recordsPerPage;
  const currentAbsencesData = [...absencesData].splice(startIndex, recordsPerPage);

  const paginate = (num) => {
    setCurrentPage(num)
  };

  const setFilteredData = (res) => {
    if (res && res.isFiltered) {
      setAbsencesData(res.data);
    } else {
      setAbsencesData(absences);
    }
  }

  useEffect(() => {
    dispatch(getAllAbsences());
  }, [dispatch]);

  useEffect(() => {
    setAbsencesData(absences);
  }, [absences]);

  return (
    <Fragment>
      <FilterBar absenceData={absences} setFilteredData={setFilteredData} />
      <AbsenceTable absenceData={currentAbsencesData} />
      <Pagination count={absencesData.length} perPage={recordsPerPage} paginate={paginate} />
    </Fragment>
  )
}