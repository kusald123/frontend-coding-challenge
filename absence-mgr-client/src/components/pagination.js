import {Pagination as BootstrapPagination} from 'react-bootstrap';


export default function Pagination(props) {
    // NOTE:: used this logic because currently has records < 100, for a large records, this solution need to be cutomized and optimized.
    const { paginate, count, perPage, current } = props;
    const pages = [];

    for (let idx = 1; idx <= Math.ceil(count / perPage); idx++) {
        pages.push(idx);
    }

    const PagesList = () => {
        return pages.map(num => {
            return (
                <BootstrapPagination.Item onClick={(e) => {paginate(parseInt(e.currentTarget.innerText))}} key={num} active={num === current}>{num}</BootstrapPagination.Item>
            )
        })
    }

    return (
        <div class="d-flex justify-content-center p-4">
            <BootstrapPagination>
                <PagesList/>
            </BootstrapPagination>
        </div>
        
    )
}



