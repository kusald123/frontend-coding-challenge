
export default function Pagination(props) {
    // NOTE:: used this logic because currently has records < 100, for a large records, this solution need to be cutomized and optimized.
    const { paginate, count, perPage } = props;
    const pages = [];

    for (let idx = 1; idx <= Math.ceil(count / perPage); idx++) {
        pages.push(idx);
    }

    const PagesList = () => {
        return pages.map(num => {
            console.log(num);
            return (<li key={num}>
                <button onClick={(e) => {paginate(parseInt(e.currentTarget.innerText))}}>{num}</button>
            </li>)
        })
    }

    return (
        <nav>
            <ul>
                <PagesList />
            </ul>
        </nav>
    )
}