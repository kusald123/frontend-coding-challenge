import React, { useState } from "react";
import { FILTERS } from "../../common/constants";
import AbsenceTypeDropDown from "./type.filter";
import DatePicker from 'react-date-picker';
import { getDateByFormat, getDateRangeMap } from '../../common/common';

export default function FilterBar(props) {

    const { absenceData, setFilteredData } = props;
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedAbsenceType, setSelectedAbsenceType] = useState('');

    // filter according to filters given by
    const filterAbsences = (set, obj) => {
        const keys = Object.keys(set);
        let isMatched;
        for (let idx = 0; idx < keys.length; idx++) {
            const key = keys[idx];
            if (key === FILTERS.DATE) {
                const mapper = getDateRangeMap(obj.startDate, obj.endDate);
                if (mapper[set[key]]) {
                    if (idx === 0) {
                        isMatched = true;
                    } else {
                        isMatched = isMatched && true;
                    }
                } else {
                    return false;
                }
            } else if (obj && obj[key] === set[key]) {
                if (idx === 0) {
                    isMatched = true;
                } else {
                    isMatched = isMatched && true;
                }
            } else {
                return false;
            }
        }
        return isMatched;
    }

    const setAbsenceType = (value) => {
        setSelectedAbsenceType(value);
    }

    const filterValues = () => {
        console.log(selectedDate, selectedAbsenceType);
        const filters = {};
        if (selectedDate) {
            filters[FILTERS.DATE] = getDateByFormat(selectedDate);
        }
        if (selectedAbsenceType) {
            filters[FILTERS.TYPE] = selectedAbsenceType;
        }

        setFilteredData({
            isFiltered: Object.keys(filters).length > 0 ? true: false,
            data: absenceData.filter((absence) => filterAbsences(filters, absence))
        });
    }

    return (
        <form>
            <label htmlFor="date">Date :</label>
            <DatePicker onChange={(date) => setSelectedDate(date)} value={selectedDate} format={"y-MM-dd"} />
            <label htmlFor="type">Type :</label>
            <AbsenceTypeDropDown setSelected={setAbsenceType} />
            <input type="button" name="submit" value="Submit" onClick={filterValues} />
        </form>

    );
}