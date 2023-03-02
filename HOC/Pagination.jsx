import { useState } from "react";
import { paginate } from "../helpers/paginate";
import Styles from "../styles/Pagination.module.css";

const Pagination = (Component) => {
  return (props) => {
    const { items, ...otherProps } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;
    const onPageChange = (page) => {
      setCurrentPage(page);
    };
    const pagesCount = Math.ceil(items.length / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    const paginatedItems = paginate(items, currentPage, pageSize);
    return (
      <>
        <Component
          // {...otherProps}
          currentPage={currentPage}
          pageSize={pageSize}
          items={paginatedItems}
        />
        <ul className={Styles.pagination}>
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? Styles.pageItemActive : Styles.pageItem
              }
            >
              <a className={Styles.pageLink} onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  };
};

export default Pagination;
