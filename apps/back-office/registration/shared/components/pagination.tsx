import { IconChevronLeft, IconChevronRight, IconChevronDown } from "@tabler/icons";
import { useState } from "react";


interface PaginationProps{
    noOfPages:number,
    currentPage:number,
    onChange?:()=>void
}

const Pagination = () => {

    return (
        <>
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}><IconChevronLeft/></a>
                </li>
                <li className="page-item"><a className="page-link">1</a></li>
                <li className="page-item"><a className="page-link">2</a></li>
                <li className="page-item"><a className="page-link">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#"><IconChevronRight/></a>
                </li>
            </ul>
        </>
    );
}

export default Pagination