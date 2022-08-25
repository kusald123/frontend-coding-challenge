import { useState } from "react";
import { TYPES } from "../../configs/constants";


export default function AbsenceTypeDropDown(props) {

    const [selectedType, setSelectedType] = useState('');

    const onChangeType = (event) => {
        setSelectedType(event.target.value);
        props.setSelected(event.target.value);
    }
    const AbsenceTypes = () => {
        const options = ['', ...Object.values(TYPES)];
        return options.map((item, idx) => {
            return (
                <option key={idx} value={item}>{item}</option>
            )
        });
    }
    return (
        <select value={selectedType} onChange={onChangeType}>
            <AbsenceTypes/>
        </select>
    )
}