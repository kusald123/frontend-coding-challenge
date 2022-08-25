import { useEffect, useState } from "react";
import { STATUS } from "../common/constants";

export default function Status(props) {
    const {createdAt, confirmedAt, rejectedAt} = props;
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (rejectedAt) {
            setStatus(STATUS.REJECTED);
        } else if (confirmedAt) {
            setStatus(STATUS.CONFIRMED);
        } else if (createdAt) {
            setStatus(STATUS.REQUESTED);
        }
    }, [])
    

    return (
        <td>{status}</td>
    )
}