
import Status from "./status";

export default function AbsenceTable(props) {
    const absenceData = props.absenceData;

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Period</th>
                    <th>Status</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
                {absenceData.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{item.userName}</td>
                            <td>{item.type}</td>
                            <td>{item.startDate} - {item.endDate}</td>
                            <Status createdAt={item.createdAt} confirmedAt={item.confirmedAt} rejectedAt={item.rejectedAt} />
                            <td>{item.admitterNote}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}