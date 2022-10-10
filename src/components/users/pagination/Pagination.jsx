import Pagination from "react-bootstrap/Pagination";
import styles from "./pagination.module.css";

export default function PaginationComp({ currentPage, handleSetPage }) {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === parseInt(currentPage)}
        onClick={handleSetPage}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className={styles.container}>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
}
