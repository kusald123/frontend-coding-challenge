
import Status from "./status";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

export default function AbsenceTable(props) {
    const { absenceData, loading, msg } = props;

    const DisplayPeriod = (props) => {
        const { start, end } = props;
        if (start === end) {
            return (
                <td>{start}</td>
            )
        } else {
            return (
                <td>{start} to {end}</td>
            )
        }
    }
    if (loading) {
        return (
            <div class="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    } else if (msg) {
        return (
            <div class="d-flex justify-content-center p-4">
                <h3>{msg}</h3>
            </div>
        )
    } else {
        return (
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Period</th>
                        <th>Member Note</th>
                        <th>Status</th>
                        <th>Admitter Note</th>
                    </tr>
                </thead>
                <tbody>
                    {absenceData.map((item, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{item.userName}</td>
                                <td>{item.type}</td>
                                <DisplayPeriod start={item.startDate} end={item.endDate}/>
                                <td>{item.memberNote}</td>
                                <Status createdAt={item.createdAt} confirmedAt={item.confirmedAt} rejectedAt={item.rejectedAt} />
                                <td>{item.admitterNote}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}