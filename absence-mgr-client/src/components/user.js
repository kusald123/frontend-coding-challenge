import { useEffect, useState } from "react";
import axios from 'axios';
import { URL } from "../configs/constants";

export default function User(props) {
    const memberId = props.userId;
    const [memberName, setMemberName] = useState('');
    

    return (
        <td>{memberName}</td>
    )
}